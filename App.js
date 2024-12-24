// App.js
import React, { useEffect, useState, useCallback } from 'react';
import { KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Asset } from 'expo-asset';
// Screens
import { ToDoScreen } from "./Screens/ToDoScreen.js";
import { TailsScreen } from "./Screens/TailsScreen.js";
import { CalScreen } from "./Screens/CalScreen.js";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./Styles/AppStyles.js";
import { Platform } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
// UI
import COLORS from "./Utils/COLORS.js";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Calendar"
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
        name="Tails Calculator"
        component={TailsScreen}
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
 
  // const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    // Prevent the splash screen from disappearing automatically
    SplashScreen.preventAutoHideAsync();
    console.log("Splash screen is being shown...");
    // Simulate an asynchronous task (e.g., fetching data)
    setTimeout(async () => {
      
      // Hide the splash screen once the task is complete
      await SplashScreen.hideAsync();
      console.log("Splash screen hidden.");
    }, 3000); // Show the splash screen for 3 seconds
  }, []);


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
