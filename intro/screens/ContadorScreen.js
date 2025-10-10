//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//2. Main: Zona de componentes
export default function ContadorScreen() {

const[contador, setContador]=useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="#18a200ff" title="Agregar" onPress={()=>setContador(contador + 1)}/>
      <Button color="#ff0000ff" title="Quitar" onPress={()=>setContador(contador - 1)}/>
      <Button color="black" title="Reiniciar" onPress={()=>setContador(0)}/>
      </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

//3. Estilos: Zona estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00452dff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color:'#ffffffff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'none',
  },

  texto2:{
    color:'#00a2ffff',
    fontSize: 40,
    fontFamily: 'Times New Roman',
    fontWeight: '900',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
  },

  contenedorBotones:{
    marginTop: 40,
    flexDirection: 'row',
    gap: 15,
  },

});
