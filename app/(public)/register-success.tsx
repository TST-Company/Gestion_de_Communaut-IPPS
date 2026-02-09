import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import PrimaryButton from '../../components/primaryButton';

export default function Success() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      {/* Icône de succès */}
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <Ionicons name="document-text" size={70} color="#4CAF50" />
          <View style={styles.checkmark}>
            <Ionicons name="checkmark-circle" size={40} color="#4CAF50" />
          </View>
        </View>
      </View>

      {/* Titre */}
      <Text style={styles.title}>Inscription réussie !</Text>

      {/* Message */}
      <Text style={styles.message}>
        Vous recevrez désormais les informations de la communauté directement sur votre téléphone.
      </Text>

      {/* Bouton */}
      {/* <TouchableOpacity 
        style={styles.button}
        onPress={() => router.replace("/login")}
      >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity> */}
      <PrimaryButton
        title="Se connecter"
        variant="secondary"
        onPress={() => router.push("/login")}
        style={{ alignSelf: "stretch" }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE8D8",
    justifyContent: "center",
    alignItems: "center",
    padding: 24
  },

  iconContainer: {
    marginBottom: 30
  },

  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#C8E6C9",
    justifyContent: "center",
    alignItems: "center",
    position: "relative"
  },

  checkmark: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#ECE8D8",
    borderRadius: 20,
    padding: 2
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
    textAlign: "center"
  },

  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 40,
    paddingHorizontal: 20
  },

  button: {
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3
  },

  buttonText: {
    color: "#C49A3A",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
})