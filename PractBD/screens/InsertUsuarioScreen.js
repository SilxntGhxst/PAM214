import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Platform,
} from "react-native";
import { UsuarioController } from "../controllers/UsuarioController";

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  // Estado para controlar si estamos editando (guardará el ID del usuario)
  const [idEdicion, setIdEdicion] = useState(null);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      setLoading(false);
    } catch (error) {
      Alert.alert("Error", error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };
    init();
    controller.addListener(cargarUsuarios);
    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  // Función única para Crear o Actualizar
  const handleGuardar = async () => {
    if (guardando) return;
    try {
      setGuardando(true);

      if (idEdicion) {
        // MODO ACTUALIZAR
        await controller.actualizarUsuario(idEdicion, nombre);
        Alert.alert("Éxito", "Usuario actualizado correctamente");
        setIdEdicion(null); // Salir del modo edición
      } else {
        // MODO CREAR
        const usuarioCreado = await controller.crearUsuario(nombre);
        Alert.alert(
          "Usuario Creado",
          `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`
        );
      }

      setNombre(""); // Limpiar input
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setGuardando(false);
    }
  };

  // Función para preparar la edición
  const handleEditar = (usuario) => {
    setNombre(usuario.nombre); // Pone el nombre en el input
    setIdEdicion(usuario.id); // Activa el modo edición
  };

  // Función para cancelar la edición
  const handleCancelarEdicion = () => {
    setNombre("");
    setIdEdicion(null);
  };

  // Función para eliminar
  const handleEliminar = (id) => {
    Alert.alert(
      "Eliminar Usuario",
      "¿Estás seguro de que quieres eliminar este usuario?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              await controller.eliminarUsuario(id);
            } catch (error) {
              Alert.alert("Error", error.message);
            }
          },
        },
      ]
    );
  };

  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userMainInfo}>
        <View style={styles.userNumber}>
          <Text style={styles.userNumberText}>{index + 1}</Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{item.nombre}</Text>
          <Text style={styles.userId}>ID: {item.id}</Text>
          <Text style={styles.userDate}>
            {new Date(item.fechaCreacion).toLocaleDateString("es-MX", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>
      </View>

      {/* Botones de Acción (Editar / Eliminar) */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditar(item)}
        >
          <Text style={styles.actionText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleEliminar(item.id)}
        >
          <Text style={styles.actionText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> CRUD COMPLETO</Text>
      <Text style={styles.subtitle}>
        {Platform.OS === "web"
          ? " WEB (LocalStorage)"
          : ` ${Platform.OS.toUpperCase()} (SQLite)`}
      </Text>

      {/* Zona de Formulario */}
      <View style={styles.insertSection}>
        <Text style={styles.sectionTitle}>
          {idEdicion ? "Editar Usuario" : "Insertar Usuario"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
          editable={!guardando}
        />

        <View style={styles.formButtons}>
          <TouchableOpacity
            style={[styles.button, guardando && styles.buttonDisabled]}
            onPress={handleGuardar}
            disabled={guardando}
          >
            <Text style={styles.buttonText}>
              {guardando
                ? "Guardando..."
                : idEdicion
                ? "Actualizar"
                : "Agregar Usuario"}
            </Text>
          </TouchableOpacity>

          {/* Botón cancelar solo aparece si estamos editando */}
          {idEdicion && (
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancelarEdicion}
              disabled={guardando}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Zona de Lista */}
      <View style={styles.selectSection}>
        <View style={styles.selectHeader}>
          <Text style={styles.sectionTitle}>Lista de Usuarios</Text>
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={cargarUsuarios}
          >
            <Text style={styles.refreshText}>Recargar</Text>
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Cargando usuarios...</Text>
          </View>
        ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUsuario}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}> No hay usuarios</Text>
              </View>
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", paddingTop: 50 },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  insertSection: {
    backgroundColor: "#fff",
    padding: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },
  selectSection: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 12,
    padding: 15,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  formButtons: { flexDirection: "row", gap: 10 },
  button: {
    flex: 1,
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: { backgroundColor: "#FF3B30" },
  buttonDisabled: { backgroundColor: "#ccc" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  selectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  refreshButton: { padding: 8 },
  refreshText: { color: "#007AFF", fontSize: 14 },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },

  // Estilos de Item actualizados para botones
  userItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  userMainInfo: { flexDirection: "row", flex: 1 },
  userNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  userNumberText: { color: "#fff", fontWeight: "bold" },
  userInfo: { justifyContent: "center" },
  userName: { fontSize: 16, fontWeight: "600", color: "#333" },
  userId: { fontSize: 11, color: "#007AFF" },
  userDate: { fontSize: 11, color: "#666" },

  // Botones de acción en la lista
  actionButtons: { flexDirection: "row", alignItems: "center", gap: 5 },
  editButton: {
    backgroundColor: "#FF9500",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  actionText: { color: "#fff", fontSize: 12, fontWeight: "bold" },

  emptyContainer: { alignItems: "center", paddingVertical: 20 },
  emptyText: { color: "#999" },
});
