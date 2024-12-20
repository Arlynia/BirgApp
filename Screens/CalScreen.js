import React from "react";
import { View, Text } from "react-native";
import { styles } from "../Styles/CalendearStyles.js";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import COLORS from "../Utils/COLORS.js"

// Define Color Constants
const DARK_GREEN = "#394a51";
const LIGHT_GREEN = "#7fa99b";
const LIGHT_TAN = "#fbf2d5";
const GOLD = "#fdc57b";

export function CalScreen() {
  return (
    <View style={styles.container}>
      <Calendar
        enableSwipeMonths
        theme={{
          monthTextColor: DARK_GREEN,
          textMonthFontSize: 30,
          textMonthFontWeight: "thin",
          arrowColor: DARK_GREEN,
          calendarBackground: LIGHT_TAN,
          dayTextColor: DARK_GREEN, // for the current month
          textInactiveColor: GOLD,
          textSectionTitleColor: LIGHT_GREEN,
          textDayHeaderFontSize: 12,
          textDayHeaderFontFamily: 'Verdana',
          textDayFontWeight: "bold",
          textDisabledColor: LIGHT_GREEN, // next month dates
          todayTextColor: GOLD, // current date
          textDayHeaderFontWeight: 'bold',
        }}
      ></Calendar>
      <Text style={styles.text}>Copy the ToDo List Here</Text>
    </View>
  );
}
