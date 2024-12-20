import { View, TextInput, Button } from "react-native";
import { styles } from "../Styles/ToDoStyles.js";
import { useState } from "react";

// Define Color Constants
const DARK_GREEN = "#394a51";
const LIGHT_GREEN = "#7fa99b";
const LIGHT_TAN = "#fbf2d5";
const GOLD = "#fdc57b";

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
        color={DARK_GREEN}
      />
    </View>
  );
}

export default GoalInput;
