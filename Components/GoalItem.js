import { View, Text } from "react-native";
import { styles } from "../Styles/ToDoStyles.js";
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';

function GoalItem(props) {
  const handleSwipeClose = (swipeDirection) => {
    console.log(`Swipeable item is closing. Swipe direction: ${swipeDirection}`);
    
    // You can add additional logic here, for example:
    // - Update the UI state
    // - Log analytics data
    // - Perform cleanup actions
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
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableWillClose={handleSwipeClose} 
    >
      <View style={styles.listItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
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
