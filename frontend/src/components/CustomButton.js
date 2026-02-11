import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#007BFF",
        padding: 12,
        marginVertical: 10,
        borderRadius: 8,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff", textAlign: "center" }}>{title}</Text>
    </TouchableOpacity>
  );
}
