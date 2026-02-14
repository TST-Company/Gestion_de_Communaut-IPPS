import { ScrollView, StyleSheet } from "react-native"
import AdminHeader from "@/components/admin/adminHeader"
import RoleCard from "@/components/admin/RoleCard"

export default function SecurityScreen() {
  return (
    <ScrollView 
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <AdminHeader />

      <RoleCard
        title="Visiteur"
        tag="Visiteur"
        permissions={["Lire"]}
      />

      <RoleCard
        title="Lecteur"
        tag="Lecteur"
        permissions={["Lire", "Modifier profil"]}
      />

      <RoleCard
        title="Gestionnaire"
        tag="Gestionnaire"
        permissions={["Envoyer message", "Gérer contacts"]}
      />

      <RoleCard
        title="Super Admin"
        tag="Super Admin"
        permissions={["Tous les accès"]}
      />
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
    paddingTop: 16,     
    paddingBottom: 20,
    gap: 12,            
  }
})