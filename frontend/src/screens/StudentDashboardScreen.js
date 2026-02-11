import React from "react";
import { View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function StudentDashboardScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <CustomButton
        title="Give Feedback"
        onPress={() => navigation.navigate("Feedback")}
      />
    </View>
  );
}
