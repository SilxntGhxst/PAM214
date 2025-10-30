import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

const BACKGROUND_URI =
  "https://www.shutterstock.com/image-photo/panoramic-abstract-blue-background-product-600nw-2500946363.jpg";
const SPLASH_LOGO_URI = "https://pngimg.com/d/lamborghini_PNG10709.png";

// Función de validación de email usando una Expresión Regular
const isValidEmail = (email) => {
  // Expresión regular para un formato de email básico: algo@algo.dominio
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function ImageBackgroundScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRegister = () => {
    if (nombre.trim() === "") {
      Alert.alert(
        "Registro de Usuario - Error",
        "Por favor completa el campo de nombre."
      );
      return;
    }

    if (email.trim() === "") {
      Alert.alert(
        "Registro de Correo - Error",
        "Por favor completa el campo de correo."
      );
      return;
    } // **NUEVA VALIDACIÓN: Formato de Correo Electrónico**

    if (!isValidEmail(email)) {
      Alert.alert(
        "Registro de Correo - Error de Formato",
        "Por favor ingresa un correo electrónico con un formato válido (ejemplo@dominio.com)."
      );
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert(
        "Registro de Usuario - Términos no aceptados",
        "Debes aceptar los términos y condiciones."
      );
      return;
    }

    Alert.alert(
      "Registro de Usuario - Registro exitoso",
      `Nombre: ${nombre}\nEmail: ${email}`,
      [
        {
          text: "OK",
          onPress: () => {
            setNombre("");
            setEmail("");
            setAceptaTerminos(false);
          },
        },
      ]
    );
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
               {" "}
        <ImageBackground
          source={{ uri: SPLASH_LOGO_URI }}
          style={styles.backgroundLogo}
          resizeMode="contain"
        >
                 {" "}
        </ImageBackground>
             {" "}
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
           {" "}
      <ImageBackground
        source={{ uri: BACKGROUND_URI }}
        style={styles.background}
      >
               {" "}
        <View style={styles.overlay}>
                    <Text style={styles.title}>Registro de Usuario</Text>       
                      {/* Solicitud Nombre completo */}         {" "}
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#ddd"
            value={nombre}
            onChangeText={setNombre}
            autoCapitalize="words"
          />
                    {/* Solicitud Correo electrónico */}         {" "}
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#ddd"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
                    {/* Switch para aceptar términos y condiciones */}         {" "}
          <View style={styles.switchContainer}>
                       {" "}
            <Text style={styles.switchLabel}>
              Aceptar términos y condiciones
            </Text>
                       {" "}
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={aceptaTerminos ? "#00FF00" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setAceptaTerminos}
              value={aceptaTerminos}
            />
                     {" "}
          </View>
                    {/* Botón para registrarse */}         {" "}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Registrarse</Text>     
               {" "}
          </TouchableOpacity>
                 {" "}
        </View>
             {" "}
      </ImageBackground>
         {" "}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#202020", // Fondo oscuro para el splash
  },
  backgroundLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: 300, // Ajustar tamaño para que el logo se vea mejor
    height: 300,
  },
  splashText: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    fontWeight: "bold",
  }, // --- Estilos para la Pantalla de Registro ---
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)", // Fondo oscuro y semi-transparente para el formulario
    padding: 30,
    borderRadius: 10,
    width: "90%", // Ancho fijo para el formulario
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 5,
    paddingHorizontal: 15,
    color: "#fff",
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
    paddingHorizontal: 5,
  },
  switchLabel: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#81b0ff", // Color del botón similar al del switch
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
