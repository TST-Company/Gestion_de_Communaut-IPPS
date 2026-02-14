import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import ProfileHeader from "@/components/admin/profileHeader"
import ProfileAvatar from "@/components/admin/profileAvatar"
import ProfileInfo from "@/components/admin/profileInfo"
import { useRouter } from "expo-router"

// Données de l'utilisateur (à remplacer par vos vraies données)
const USER_DATA = {
  firstName: "James",
  lastName: "Niox",
  phone: "+221 78 794 40 47",
  role: "Administrateur",
  initials: "JN",
}

export default function ProfileScreen() {
   const router = useRouter()

  const handleLogout = () => {
    Alert.alert(
      "Déconnexion",
      "Êtes-vous sûr de vouloir vous déconnecter ?",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        {
          text: "Se déconnecter",
          style: "destructive",
          onPress: () => {
            // Logique de déconnexion ici
            console.log("Déconnexion...")
            // router.push("/login")
          }
        }
      ]
    )
  }
    return (
    <ScrollView 
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <ProfileHeader />
      
      {/* Avatar et nom */}
      <ProfileAvatar 
        initials={USER_DATA.initials}
        name={`${USER_DATA.firstName} ${USER_DATA.lastName}`}
        role={USER_DATA.role}
      />

      {/* Informations */}
      <ProfileInfo user={USER_DATA} />

      {/* Bouton de déconnexion */}
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Ionicons name="log-out-outline" size={24} color="#EF5350" />
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ECE8D8",
  },

  content: {
    padding: 16,
    paddingBottom: 40,
  },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEBEE",
    borderRadius: 16,
    padding: 16,
    marginTop: 24,
    gap: 12,
  },

  logoutText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#EF5350",
  }
})