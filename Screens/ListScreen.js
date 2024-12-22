import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { styles } from "../Styles/ListStyles.js";
import COLORS from "../Utils/COLORS.js";
import { ToDoScreen } from "./ToDoScreen.js";

export function ListScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Chloe.png")}
        style={[styles.chloe, styles.transformImage]}
      ></Image>

      <Text style={styles.text}>FFXIV Task List</Text>
      {/* <ToDoScreen />  */}
    </View>
  );
}
