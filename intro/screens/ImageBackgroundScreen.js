import { Text, StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import React, { Component, useEffect, useState } from "react";


export default function ImageBackgroundScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
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
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://www.shutterstock.com/image-photo/panoramic-abstract-blue-background-product-600nw-2500946363.jpg",
        }}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido!</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
  const styles = StyleSheet.create({
    splashContainer: {
      flex: 1,
      backgroundColor: "#000000ff",
      justifyContent: "center",
      alignItems: "center",
    },

    splashText: {
      fontSize: 24,
      color: "#fff",
    },

    background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
      padding: 20,
      borderRadius: 10,
    },

    title: {
      fontSize: 28,
      color: "#fff",
      marginBottom: 10,
      textAlign: "center",
    },
  });

