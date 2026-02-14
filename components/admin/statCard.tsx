import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function StatCard({ title, value, icon }: any) {
  return (
    <View style={styles.card}>
      <Ionicons name={icon} size={45} />
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
    marginBottom: 12
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 11
  },
  // icon: { 
  //   width: 45,
  //   height: 45,
  // }
})
