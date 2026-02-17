import { View, Text, StyleSheet } from "react-native"

interface ProfileAvatarProps {
  initials: string
  name: string
  role: string
}

export default function ProfileAvatar({ initials, name, role }: ProfileAvatarProps) {
  return (
    <View style={styles.container}>
      {/* Avatar circulaire avec initiales */}
      <View style={styles.avatar}>
        <Text style={styles.initials}>{initials}</Text>
      </View>

      {/* Nom */}
      <Text style={styles.name}>{name}</Text>

      {/* Rôle */}
      <Text style={styles.role}>{role}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#D4C5A9",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  initials: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#C49A3A",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },

  role: {
    fontSize: 14,
    color: "#666",
  }
})