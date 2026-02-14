import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function QuickActions() {
  return (
    <View style={styles.box}>
      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="person-add-outline" size={20} color="#C49A3A" />
        <Text style={styles.action}>Inviter un gestionnaire</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity style={styles.actionButton}>
        <Ionicons name="key-outline" size={20} color="#C49A3A" />
        <Text style={styles.action}>Configurer les clés API</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
    marginTop: 10,
  },

  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
  },

  action: {
    color: "#C49A3A",
    fontSize: 16,
    fontWeight: "500",
  },

  separator: {
    height: 1,
    backgroundColor: "#f0f0f0",
    marginVertical: 8,
  }
})