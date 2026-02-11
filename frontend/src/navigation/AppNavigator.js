import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import LoginScreen from "../screens/LoginScreen";
import StudentDashboardScreen from "../screens/StudentDashboardScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import TeacherDashboardScreen from "../screens/TeacherDashboardScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboardScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="TeacherDashboard" component={TeacherDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
