import React from "react";
import { View, Text } from "react-native";
import { styles } from "../Styles/CalendearStyles.js";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import COLORS from "../Utils/COLORS.js"


export function CalScreen() {
  return (
    <View style={styles.container}>
      <Calendar
        enableSwipeMonths
        theme={{
          monthTextColor: COLORS.DARK_GREEN,
          textMonthFontSize: 30,
          textMonthFontWeight: "thin",
          arrowColor: COLORS.DARK_GREEN,
          calendarBackground: COLORS.LIGHT_TAN,
          dayTextColor: COLORS.DARK_GREEN, // for the current month
          textInactiveColor:COLORS.GOLD,
          textSectionTitleColor: COLORS.LIGHT_GREEN,
          textDayHeaderFontSize: 12,
          textDayHeaderFontFamily: 'Verdana',
          textDayFontWeight: "bold",
          textDisabledColor: COLORS. LIGHT_GREEN, // next month dates
          todayTextColor:COLORS.GOLD, // current date
          textDayHeaderFontWeight: 'bold',
        }}
      ></Calendar>
      <Text style={styles.text}>Show Tasks from Date Here</Text>
    </View>
  );
}
