import { View, TextInput, Button } from "react-native";
import { styles } from "../Styles/ToDoStyles.js";
import { useState } from "react";
import COLORS from "../Utils/COLORS.js";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    // console.log(enteredText)
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.TextInput}
        placeholder="Your current goals"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
        clearButtonMode="always"
      />
      <Button
        style={styles.buttonStyle}
        title="Add Goal"
        onPress={addGoalHandler}
        color={COLORS.DARK_GREEN}
      />
    </View>
  );
}

export default GoalInput;
