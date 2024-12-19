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
        justifyContent: 'flex-start',
        position: 'relative',
      },
      text: {
        color: DARK_GREEN,
        fontSize: 30,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 40,
        top: -250,
        paddingLeft: 100,
        

      },
      icon: {
        marginTop: 20, // Adjust as needed to position the icon properly
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: 'column',
      },
})
