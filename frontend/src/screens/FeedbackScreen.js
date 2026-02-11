import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function FeedbackScreen() {
  const [rating, setRating] = useState(0);

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F5F7FA" }}>
      
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
        Rate Your Subject
      </Text>

      <View style={{ flexDirection: "row", marginBottom: 30 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Text style={{ fontSize: 32 }}>
              {star <= rating ? "⭐" : "☆"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text>Your Rating: {rating}</Text>

    </View>
  );
}
