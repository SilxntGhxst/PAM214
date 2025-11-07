import { StatusBar } from "expo-status-bar";
import { Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native-web";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);


  const mostrarAlerta = () => {
    Alert.alert('Editando perfil...', Button, ['Guardar', 'Cancelar'])
    alert('Editando perfil...', )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}> Bienvenido a la app!</Text>
      </View>
    );
  }

  return (
    
    <ImageBackground style={styles.background}
    source={{uri: "https://img.freepik.com/vector-gratis/fondo-abstracto-blanco-minimalista_23-2148816119.jpg"}}
    >
      <ScrollView>
      <View style={styles.container}>
        
        <Text style={styles.Title}>Información del desarrollador</Text>
        <Text style={styles.textContent}>Nombre: Santiago Antonio Meneses Rangel</Text>
        <Text style={styles.textContent}>Profesión: Ingeniero en Tecnologías de la Información</Text>
        <Text style={styles.textBiografy}>Bigrafía: Nacio el 07 de mayo del 2006 en 
          la clinica de la UAQ en Santa Rosa Jauregui, crecio en Paseos de San Miguel
          colonia colindante con Loarca y Ciudad del Sol, curso la primaria, secundaria y preparatoria
          en el mismo municipio, actualmente estudia en la Universidad Politécnica de Querétaro.
        </Text>
        <Text style={styles.textContentBold}>Información de contacto:</Text>
        <Text style={styles.textContent}>Email: sanmenesest17@gmail.com</Text>
        <Text style={styles.textContentEnd}>Tel. 4426793127</Text>
        <Button 
        color='#0073ffff'
        title='Editar Perfil'
        onPress={mostrarAlerta}/>
      
        <StatusBar style="auto" />
        
      </View>
      </ScrollView>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    borderRadius: 10,
    margin: 100,
    marginBottom: 500,
  },
  Title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  textContent:{
    margin: 15,
    fontSize: 20,
    fontWeight:'400',
    color: '#fff',
  },
    textContentEnd:{
    marginBottom: 1500,
    fontSize: 20,
    fontWeight:'400',
    color: '#fff',
  },
    textContentBold:{
    marginBottom: 15,
    marginTop: 30,
    fontSize: 25,
    fontWeight:'400',
    color: '#fff',
    fontWeight: 'bold',
  },

    textBiografy:{
    fontSize: 20,
    marginTop: 30,
    fontWeight:'400',
    color: '#fff',
  },

  splashContainer: {
    flex: 1,
    backgroundColor: "#0073ffff",
    justifyContent: "center",
    alignItems: "center",
  },

  splashText: {
    fontSize: 24,
    color: "#ffffffff",
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
