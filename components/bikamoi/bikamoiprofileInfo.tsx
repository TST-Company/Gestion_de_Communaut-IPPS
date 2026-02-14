import { View, Text, StyleSheet } from "react-native"

interface ProfileInfoProps {
  user: {
    firstName: string
    lastName: string
    phone: string
  }
}

export default function ProfileInfo({ user }: ProfileInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Mes informations</Text>

      {/* Prénom */}
      <View style={styles.infoRow}>
        <Text style={styles.label}>Prénom (s)</Text>
        <Text style={styles.value}>{user.firstName}</Text>
      </View>

      {/* Séparateur */}
      <View style={styles.separator} />

      {/* Nom */}
      <View style={styles.infoRow}>
        <Text style={styles.label}>Nom</Text>
        <Text style={styles.value}>{user.lastName}</Text>
      </View>

      {/* Séparateur */}
      <View style={styles.separator} />

      {/* Téléphone */}
      <View style={styles.infoRow}>
        <Text style={styles.label}>Téléphone</Text>
        <Text style={styles.value}>{user.phone}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },

  label: {
    fontSize: 14,
    color: "#999",
  },

  value: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },

  separator: {
    height: 1,
    backgroundColor: "#F0F0F0",
  }
})