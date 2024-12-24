import { View, Text, Pressable } from "react-native";
import { styles } from "../Styles/ToDoStyles.js";
import { useState } from "react";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import COLORS  from "../Utils/COLORS.js";

function GoalItem(props) {
  const [toggled, setToggled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#394a51");
  const handleSwipeClose = (swipeDirection) => {
    console.log(
      `Swipeable item is closing. Swipe direction: ${swipeDirection}`
    );

    // You can add additional logic here, for example:
    // - Update the UI state
    // - Log analytics data
    // - Perform cleanup actions
  };

  const toggleHandler = () => {
    setToggled((prevState) => !prevState);
  };

  const handlePress = () => {
    setBackgroundColor(
      (prevColor) => (prevColor === COLORS.DARK_GREEN ? COLORS.LIGHT_GREEN : COLORS.LIGHT_TAN) 
    );
  };

  const renderRightActions = (progress, dragX) => (
    <View style={styles.hiddenRow}>
      <Text
        style={styles.deleteText}
        onPress={() => props.onDeleteItem(props.id)}
      >
        Confirm Delete?
      </Text>
    </View>
  );
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Pressable onPress={handlePress}>
        <View style={[styles.listItem, { backgroundColor }]}>
          <Text style={styles.goalText}>{props.text}</Text>
        </View>
      </Pressable>
    </Swipeable>
    // <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
    //   <View style={styles.listItem}
    //   // key={props.item}
    //   >
    //     <Text style={styles.goalText}>{props.text}</Text>
    //   </View>
    // </Pressable>
  );
}

export default GoalItem;
