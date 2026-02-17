import { View, Text, StyleSheet } from "react-native";

interface StatutCardProps {
  label: string;
  value: string;
  valueColor?: string;
  backgroundColor?: string;
}

export default function StatutCard({ 
  label, 
  value, 
  valueColor = "#4ADE80", 
  backgroundColor = "#DCFCE7" 
}: StatutCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.badge, { backgroundColor }]}>
        <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000",
  },
  badge: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
});