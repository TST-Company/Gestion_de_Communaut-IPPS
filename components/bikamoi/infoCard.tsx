import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export default function InfoCard() {
  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={35} color="#C5A045" />
        </View>
        <Text style={styles.title}>Information</Text>
      </View>
      <Text style={styles.message}>
        Les messages de la communauté vous sont envoyés directement via WhatsApp ou SMS.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    marginTop: 25,
    shadowColor: "#000", // iOS
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: -10,
    marginTop: -10,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 100,
    backgroundColor: "#F5EDD6",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -5,
    marginRight: 10,
  },
  title: {
    color: "#C5A045",
    fontSize: 22,
    fontWeight: "bold",
  },
  message: {
    color: "#000000",
    fontSize: 15,
    lineHeight: 22,
    marginLeft: 59,
  },
});