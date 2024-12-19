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

      },
      text: {
        margin: 40,
        textAlign: 'center',
        color: DARK_GREEN,
        fontSize: 35,
        fontWeight: 'bold',
      },
})
