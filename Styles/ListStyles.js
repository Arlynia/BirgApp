import { StyleSheet } from "react-native";
import COLORS from "../Utils/COLORS.js"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.LIGHT_TAN,

      },
      text: {
        margin: 40,
        textAlign: 'center',
        color: COLORS.DARK_GREEN,
        fontSize: 35,
        fontWeight: 'bold',
      },
})
