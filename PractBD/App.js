import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// Importamos la pantalla principal desde la carpeta screens
import InsertUsuarioScreen from './screens/InsertUsuarioScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Renderizamos la pantalla de la práctica */}
      <InsertUsuarioScreen />
      
      {/* Controlamos la barra de estado (batería, hora, señal) */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // No agregamos paddingTop aquí porque InsertUsuarioScreen.js
    // ya tiene un paddingTop: 50 en su estilo 'container'.
  },
});