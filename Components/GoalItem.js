import {
    View,
    Text,
  } from "react-native";
  import { styles } from "../Styles/ToDoStyles.js";

function GoalItem(props) {
    return (
        <View style={styles.listItem} key={props.item}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    
    );
}


export default GoalItem;
