import React, { useState } from "react";
import { View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({ navigation }) {
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (role.toLowerCase() === "student") {
      navigation.navigate("StudentDashboard");
    } else {
      navigation.navigate("TeacherDashboard");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <CustomInput
        placeholder="Enter role (student/teacher)"
        value={role}
        onChangeText={setRole}
      />
      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
}
