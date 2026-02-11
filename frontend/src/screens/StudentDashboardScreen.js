import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function StudentDashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F5F7FA" }}>
      
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Welcome Student 👋
      </Text>

      <TouchableOpacity
        style={cardStyle}
        onPress={() => navigation.navigate("Feedback")}
      >
        <Text style={titleStyle}>⭐ Give Rating Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={cardStyle}>
        <Text style={titleStyle}>✍️ Write Text Feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={cardStyle}>
        <Text style={titleStyle}>🎤 Submit Voice Feedback</Text>
      </TouchableOpacity>

    </View>
  );
}

const cardStyle = {
  backgroundColor: "#fff",
  padding: 20,
  borderRadius: 12,
  marginBottom: 15,
  elevation: 3,
};

const titleStyle = {
  fontSize: 16,
  fontWeight: "600",
};
