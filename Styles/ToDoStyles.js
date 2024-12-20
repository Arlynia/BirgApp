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
        marginTop: 20, 
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: 'column',
      },
      appContainer: {
        flex: 1,
        paddingTop: 0,
        paddingHorizontal: 16,
      },
      inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        marginLeft: 2,
        borderBottomWidth: 2,
        borderBottomColor: LIGHT_GREEN,
      },
      TextInput: {
        borderWidth: 1.5,
        borderColor: DARK_GREEN,
        width: "70%",
        marginRight: 8,
        padding: 8,
        borderRadius: 5,
        backgroundColor: LIGHT_TAN,
      },
      goalsContainer: {
        flex: 5,
      },
      listItem: {
        marginLeft: 1,
        margin: 8,
        borderRadius: 6,
        backgroundColor: DARK_GREEN,
        padding: 8,
        color: "white",
      },
      goalText: {
        color: GOLD,
      },
      buttonStyle: {
        color: LIGHT_GREEN,
      }
})
