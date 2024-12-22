import { StyleSheet } from "react-native";
import COLORS from "../Utils/COLORS.js";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_TAN,
  },
  text: {
    margin: 30,
    textAlign: "center",
    color: COLORS.DARK_GREEN,
    fontSize: 30,
    fontWeight: "bold",
    margin: -175,
  },
  chloe: {
    height: 200,
    width: 100,
  },
  transformImage: {
    transform: [{ translateX: 275 }, { translateY: 425 }],
  },
});
