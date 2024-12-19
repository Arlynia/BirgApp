import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../Styles/ListStyles.js";

export function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>FFXIV Task List</Text>
    </View>
  );
}

