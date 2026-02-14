import { StyleSheet, ScrollView, View, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import UserHeader from "@/components/admin/userHeader"
import UserCard from "@/components/admin/userCard"

// Données de test
const MOCK_USERS = [
  {
    id: "1",
    name: "Arristine Mendes",
    role: "Gestionnaire",
    roleColor: "#FFA726",
  },
  {
    id: "2",
    name: "Béatrice Badiane",
    role: "Lecteur",
    roleColor: "#66BB6A",
  },
  {
    id: "3",
    name: "Calicia Diatta",
    roles: ["Lecteur", "Radié"],
    roleColors: ["#66BB6A", "#EF5350"],
  },
  {
    id: "4",
    name: "James Niox",
    role: "Super Admin",
    roleColor: "#C49A3A",
  },
]

export default function UsersScreen() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <ScrollView 
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <UserHeader />
      
      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher un utilisateur..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        {/* <Text>Coder is my life </Text> */}
        
        <View style={styles.filterButton}>
          <Ionicons name="filter-outline" size={20} color="#C49A3A" />
        </View>
      </View>

      {/* Liste des utilisateurs */}
      <View style={styles.usersList}>
        {MOCK_USERS.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </View>
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
    paddingBottom: 20,
  },

  searchContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },

  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
    gap: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },

  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  usersList: {
    marginTop: 16,
    gap: 12,
  }
})