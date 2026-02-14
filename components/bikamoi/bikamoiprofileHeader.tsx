import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { router, useRouter } from "expo-router"


export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => router.push("/bikamoi/bikamoi_dashboard")}>
          <Image
            source={require("../../assets/images/logo_ipps.png")}
            style={styles.logo}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Mon profil</Text>
      </View>
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
    marginBottom: 20,
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
  }
})