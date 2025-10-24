import { Text, StyleSheet, View, Button } from "react-native";
import React, { Component, useState } from "react";
import ContadorScreen from "./ContadorScreen";
import BotonesScreen from "./BotonesScreen";
import TextImputScreen from "./TextImputScreen";
import ImageBackgroundScreen from "./ImageBackgroundScreen";
import ScrollViewScreen from "./ScrollViewScreen";
import ActivityIndicatorScreen from "./ActivityIndicatorScreen";
import FlatListScreen from "./FlatListScreen";
import ModalScreen from "./ModalScreen";
import BottomSheetScreen from "./BottomSheetScreen";

export default function MenuScreen() {
  const [screen, setScreen] = useState("menu");

  switch (screen) {
    case "contador":
      return <ContadorScreen />;
    case "botones":
      return <BotonesScreen />;
    case "TextImput":
      return <TextImputScreen />;
    case "ImageBackground":
      return <ImageBackgroundScreen />;
    case "ScrollView":
      return <ScrollViewScreen />;
    case "ActivityIndicator":
      return <ActivityIndicatorScreen />;
    case "FlatList":
      return <FlatListScreen />;
    case "Modal":
      return <ModalScreen />;
    case "BottomSheet":
      return <BottomSheetScreen />;

    case "menu":
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.textoMenu}>Menu Screen</Text>
          <View style={styles.contenedorBotones}>
            <Button
              onPress={() => setScreen("contador")}
              title="Pract: Contador"
            />
            <Button
              onPress={() => setScreen("botones")}
              title="Pract: Buttons"
            />
            <Button
              onPress={() => setScreen("TextImput")}
              title="Pract: TextImput"
            />
            <Button
              onPress={() => setScreen("ImageBackground")}
              title="Pract: ImageBackground"
            />
            <Button
              onPress={() => setScreen("ScrollView")}
              title="Pract: ScrollView"
            />
            <Button
              onPress={() => setScreen("ActivityIndicator")}
              title="Pract: ActivityIndicator"
            />
            <Button
              onPress={() => setScreen("FlatList")}
              title="Pract: FlatList"
            />
            <Button onPress={() => setScreen("Modal")} title="Pract:Modal" />
            <Button
              onPress={() => setScreen("BottomSheet")}
              title="Pract: BottomSheet"
            />
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b4ffadff",
    alignItems: "center",
    justifyContent: "center",
  },

  textoMenu: {
    color: "#000000ff",
    fontSize: 30,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontStyle: "none",
    textDecorationLine: "none",
  },

  contenedorBotones: {
    marginTop: 40,
    flexDirection: "column",
    gap: 15,
  },
});
