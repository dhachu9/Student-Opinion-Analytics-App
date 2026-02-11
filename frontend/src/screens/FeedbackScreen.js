import React, { useState } from "react";
import { View, Alert } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from "../services/apiService";

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState("");

  const submitFeedback = async () => {
    try {
      await api.post("/feedback", {
        message: feedback,
        rating: 5,
      });
      Alert.alert("Success", "Feedback Submitted");
      setFeedback("");
    } catch (error) {
      Alert.alert("Error", "Submission Failed");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <CustomInput
        placeholder="Enter your feedback"
        value={feedback}
        onChangeText={setFeedback}
      />
      <CustomButton title="Submit Feedback" onPress={submitFeedback} />
    </View>
  );
}
