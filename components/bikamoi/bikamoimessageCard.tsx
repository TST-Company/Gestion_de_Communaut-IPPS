import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface BikamoiMessageCardProps {
  message: {
    id: string
    type: "whatsapp" | "sms"
    title: string
    recipients: string
    time: string
    status: "sent" | "draft"
  }
}

export default function BikamoiMessageCard({ message }: BikamoiMessageCardProps) {
    const getStatusColor = () => {
        return message.status === "sent" ? "#4CAF50" : "#C49A3A"
      }
    
      const getStatusText = () => {
        return message.status === "sent" ? "Envoyé" : "Brouillon"
      }
    
      const getIconName = () => {
        return message.type === "whatsapp" ? "logo-whatsapp" : "chatbubble"
      }
    
      const getIconColor = () => {
        return message.type === "whatsapp" ? "#25D366" : "#007AFF"
      }
    
      return (
        <TouchableOpacity style={styles.card}>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Ionicons name={getIconName()} size={20} color={getIconColor()} />
              <Text style={styles.type}>
                {message.type === "whatsapp" ? "WhatsApp" : "SMS"}
              </Text>
            </View>
            <Text style={styles.time}>{message.time}</Text>
          </View>
    
          <Text style={styles.title}>{message.title}</Text>
          <Text style={styles.recipients}>{message.recipients}</Text>
    
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}>
            <Text style={styles.statusText}>{getStatusText()}</Text>
          </View>
        </TouchableOpacity>
      )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 3,
    borderLeftColor: "#C49A3A",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  type: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },

  time: {
    fontSize: 11,
    color: "#999",
  },

  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },

  recipients: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },

  statusBadge: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },

  statusText: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
  }
})