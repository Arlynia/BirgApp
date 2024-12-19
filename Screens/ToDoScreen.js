// ToDoList.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../Styles/ToDoStyles.js";
import { Ionicons } from "@expo/vector-icons";

// Define Color Constants
const DARK_GREEN = "#394a51";
const LIGHT_GREEN = "#7fa99b";
const LIGHT_TAN = "#fbf2d5";
const GOLD = "#fdc57b";

export function ToDoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons  name="add-circle-outline" color={GOLD} size={125} />
        <Ionicons  name="add-circle-outline" color={GOLD} size={125} />
      </View>
      <Text style={styles.text}>Add A Task</Text>
      <Text style={styles.text}>Set A Reminder</Text>
    </View>
  );
}
