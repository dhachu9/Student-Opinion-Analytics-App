import React from "react";
import { View, Text } from "react-native";

export default function TeacherDashboardScreen() {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#EEF2F7" }}>
      
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Teacher Analytics Dashboard 📊
      </Text>

      {/* Summary Cards */}
      <View style={cardRow}>
        <View style={summaryCard}>
          <Text style={cardTitle}>⭐ Avg Rating</Text>
          <Text style={cardValue}>4.2</Text>
        </View>

        <View style={summaryCard}>
          <Text style={cardTitle}>📝 Total Feedback</Text>
          <Text style={cardValue}>120</Text>
        </View>
      </View>

      {/* Chart Placeholder 1 */}
      <View style={chartBox}>
        <Text style={{ textAlign: "center" }}>
          📈 Rating Trend (Power BI Line Chart)
        </Text>
      </View>

      {/* Chart Placeholder 2 */}
      <View style={chartBox}>
        <Text style={{ textAlign: "center" }}>
          📊 Sentiment Distribution (Pie Chart)
        </Text>
      </View>

    </View>
  );
}

const cardRow = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
};

const summaryCard = {
  backgroundColor: "#fff",
  padding: 15,
  borderRadius: 10,
  width: "48%",
  elevation: 3,
};

const cardTitle = {
  fontSize: 14,
  color: "#555",
};

const cardValue = {
  fontSize: 22,
  fontWeight: "bold",
  marginTop: 5,
};

const chartBox = {
  backgroundColor: "#fff",
  height: 150,
  borderRadius: 12,
  justifyContent: "center",
  marginBottom: 20,
  elevation: 3,
};
