// AppStyles.js
import { StyleSheet } from "react-native";
import COLORS from "../Utils/COLORS.js"


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_TAN,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    margin: 50,
    padding: 50,
    flex: 1,
    color: COLORS.DARK_GREEN,
    fontSize: 50,
  },
  icons: {
    width: 115,
    height: 115,
    padding: 30,
    marginTop: 60,
    marginRight: 10,
  },
});
