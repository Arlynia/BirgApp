import { StyleSheet } from "react-native";
import COLORS from "../Utils/COLORS.js"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.LIGHT_TAN,
        justifyContent: 'flex-start',
        position: 'relative',
      },
      text: {
        color: COLORS.DARK_GREEN,
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
        borderBottomColor: COLORS.LIGHT_GREEN,
      },
      TextInput: {
        borderWidth: 1.5,
        borderColor: COLORS.DARK_GREEN,
        width: "70%",
        marginRight: 8,
        padding: 8,
        borderRadius: 5,
        backgroundColor: COLORS.LIGHT_TAN,
      },
      goalsContainer: {
        flex: 5,
      },
      listItem: {
        marginLeft: 1,
        margin: 8,
        borderRadius: 6,
        backgroundColor: COLORS.DARK_GREEN,
        padding: 8,
        color: "white",
        width: "100%",
      },
      goalText: {
        color: COLORS.GOLD,
      },
      buttonStyle: {
        color: COLORS.LIGHT_GREEN,
      },
      hiddenRow: {
        alignItems: 'center',
        backgroundColor: COLORS.GOLD,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderRadius: 6,
        // height: 30,
        width: '70%',
        marginVertical: 10,

      },
      deleteText: {
        color: COLORS.DARK_GREEN,
        fontWeight: 'bold',
        padding: 20,
        margin: 25,
        position: 'absolute',
        fontSize: 18,

      },
})
