import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { styles } from "../Styles/TailsStyles.js";


export function TailsScreen({ goals }) {
  console.log(goals);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Chloe.png")}
        style={[styles.chloe, styles.transformImage]}
      ></Image>

      <Text style={styles.text}>Wondrous Tails Calculator</Text>
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <View styles={styles.textItem}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}
