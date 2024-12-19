import { StyleSheet } from "react-native";

// Define Color Constants
const DARK_GREEN = '#394a51';
const LIGHT_GREEN = '#7fa99b';
const LIGHT_TAN = '#fbf2d5';
const GOLD = '#fdc57b';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHT_TAN,
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        margin: 50,
        padding: 50,
        flex: 1,
        color: DARK_GREEN,
        fontSize: 50,
      },
      calendar: {
        flex: 1,
        alignItems: 'center',
        padding: 5,
        justifyContent: 'center',
      }
})
