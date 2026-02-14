import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { router, useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function BikamoiMessageHeader() {
    return (
        <View style={styles.container}>
          <View style={styles.left}>
            <TouchableOpacity onPress={() => router.push("/bikamoi/bikamoi_dashboard")}>
              <Image
                source={require("../../assets/images/logo_ipps.png")}
                style={styles.logo}
              />
            </TouchableOpacity>

            <Text style={styles.title}>Message</Text>
          </View>
          
          <TouchableOpacity onPress={() => router.push("/bikamoi/bikamoi_profile")}>
            <Ionicons name="person-circle-outline" size={45} color="#C49A3A" />
          </TouchableOpacity>
        </View>
      )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 16,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  logo: {
    width: 45,
    height: 45,
    borderRadius: 8,
  },

  title: {
    fontWeight: "bold",
    color: "#C49A3A",
    fontSize: 20,
  },

  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  }
})