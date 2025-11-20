import { View, Text, StyleSheet } from "react-native";

export default function detalles() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del perfil</Text>
      <Text style={styles.simpleText}>Usando Navigation Stack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonSettings: {
    backgroundColor: "#FF8800", // Naranja
  },
  buttonHome: {
    backgroundColor: "#2BA745", // Verde
  },
  simpleText: {
    color: "#002f96ff",
    fontSize: 16,
    fontWeight: "600",
  },
});
