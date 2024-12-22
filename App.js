// App.js
import * as React from "react";
import { KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Screens
import { ToDoScreen } from "./Screens/ToDoScreen.js";
import { ListScreen } from "./Screens/ListScreen.js";
import { CalScreen } from "./Screens/CalScreen.js";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Styles/AppStyles.js";
import { Platform } from "react-native";
// UI
import COLORS from "./Utils/COLORS.js";


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.LIGHT_TAN,
        },
        tabBarActiveTintColor: COLORS.GOLD,
        tabBarInactiveTintColor: COLORS.DARK_GREEN,
        tabBarActiveBackgroundColor: COLORS.LIGHT_GREEN,
        tabBarInactiveBackgroundColor: COLORS.LIGHT_GREEN,
        keyboardHidesTabBar: false,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              height: 100,
              position: "absolute",
              paddingBotom: 0,
              backgroundColor: COLORS.LIGHT_GREEN,
              margin: 15,
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
              overflow: "hidden",
              shadowOffset: 15,
              shadowColor: "black",
              shadowRadius: 15,
              shadowOpacity: 1.0,
            },
            android: {
              height: 100,
              width: 325,
              position: "absolute",
              paddingBottom: 0,
              backgroundColor: COLORS.LIGHT_GREEN,
              margin: 15,
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              overflow: "hidden",
              elevation: 5,
            },
          }),
        },
        // tabBarItemStyle: {
        //   borderRadius: 25,
        //   borderCurve: 'continuous',
        // },
      }}
    >
      <Tab.Screen
        name="To Do"
        component={ToDoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={styles.icons}
              name="add-circle-outline"
              color={color}
              size={50}
            />
          ),
          tabBarLabel: () => null,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={styles.icons}
              name="list-circle-outline"
              color={color}
              size={50}
            />
          ),
          tabBarLabel: () => null,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Calendar"
        component={CalScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              style={styles.icons}
              name="calendar-number-outline"
              color={color}
              size={50}
            />
          ),
          tabBarLabel: () => null,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled={false}
    >
        <NavigationContainer>
          <Tabs></Tabs>
        </NavigationContainer>

    </KeyboardAvoidingView>
  );
}
