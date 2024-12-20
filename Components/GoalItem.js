import { View, Text, Pressable } from "react-native";
import { styles } from "../Styles/ToDoStyles.js";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.listItem} 
      // key={props.item}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;
