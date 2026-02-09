import { View, Text, Image, StyleSheet } from "react-native"
import { useRouter } from "expo-router"
import PrimaryButton from "@/components/primaryButton"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
  const router = useRouter()

  return (
      <View style={{ flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#EBE8D8" }}>
        <Image
          source={require("../../assets/images/logo_ipps.png")}
          style={{ width: 180, height: 180, alignSelf: "center" }}
        />

        <Text style={styles.title}>
          Community App
        </Text>
        <Text style={{ textAlign: "center", marginVertical: 12, fontSize: "18" }}>
          Rester connecter avec notre communauté simplement et directement.
        </Text>

        <PrimaryButton title="S'inscrire" onPress={() => router.push("/register")} />

        <PrimaryButton
          title="Se connecter"
          variant="secondary"
          onPress={() => router.push("/login")}
        />
    </View>

  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    marginVertical: 12,
    fontSize: 30,
    fontWeight: "bold"
  },
  
})
