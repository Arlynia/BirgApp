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
    transform: [{ translateX: 280 }, { translateY: 125 }],
  },
  stickerBoard: {
    width: 270,
    height: 270,
    flexDirection: 'row',
    flexWrap: 'wrap',
    transform: [{ translateX: 30 }, { translateY: 200 }],
  },
  cell: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: COLORS.DARK_GREEN,
    borderRadius: 5,
    transform: [{ translateX: 0 }, { translateY: 175 }],
    width: '80%',
    marginLeft: 30,

  },
  resetText:{
    color: COLORS.GOLD,
    fontSize: 18,
  },
});
