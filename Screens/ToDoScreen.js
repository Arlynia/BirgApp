// ToDoList.js
import React from "react";
import { View, FlatList } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { styles } from "../Styles/ToDoStyles.js";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import GoalItem from "../Components/GoalItem";
import GoalInput from "../Components/GoalInput";

export function ToDoScreen() {
  const [currentGoalsArray, setCurrentGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText);
    setCurrentGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCurrentGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
    console.log("[DEBUG]:Item Deleted...");
  }

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* <View style={styles.icon}>
        <Ionicons  name="add-circle-outline" color={GOLD} size={125} />
        <Ionicons  name="add-circle-outline" color={GOLD} size={125} />
      </View>
      <Text style={styles.text}>Add A Task</Text>
      <Text style={styles.text}>Set A Reminder</Text> */}
        <View style={styles.appContainer}>
          <GoalInput onAddGoal={addGoalHandler}></GoalInput>
          <View style={styles.goalsContainer}>
            {/* <ScrollView>
            {/* <Text> List of goals...</Text> */}
            {/* {currentGoalsArray.map((goal) => (
              // <View style={styles.listItem} key={goal}>
              //   <Text style={styles.goalText}>{goal}</Text>
              // </View>
            ))} */}
            {/* </ScrollView> */}
            <FlatList
              data={currentGoalsArray}
              renderItem={(itemData) => {
                // itemData.index
                return (
                  <GoalItem
                    text={itemData.item.text}
                    onDeleteItem={deleteGoalHandler}
                    id={itemData.item.id}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            ></FlatList>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
