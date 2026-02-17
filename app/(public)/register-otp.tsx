import PrimaryButton from "@/components/primaryButton"
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native"


export default function RegisterOtp() {
  const router = useRouter()
  const [enteredOtp, setEnteredOtp] = useState("")   // code saisi par l’utilisateur
  const [savedOtp, setSavedOtp] = useState("")       // code sauvegardé depuis register.tsx

  // Charger le code OTP sauvegardé
  useEffect(() => {
    const loadOtp = async () => {
      const otp = await AsyncStorage.getItem("register_otp")
      if (otp) setSavedOtp(otp)
      console.log("🔧 OTP sauvegardé récupéré:", otp)
    }
    loadOtp()
  }, [])

  // Vérifier le code
  const handleVerify = () => {
    if (enteredOtp.trim() === savedOtp.trim()) {
      Alert.alert("✅ Succès", "Code correct, vous êtes inscrit !")
      router.push("/register-success")
    } else {
      Alert.alert("❌ Erreur", "Le code OTP est invalide")
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#fff",
        borderRadius: 15,
        justifyContent: "center"
      }}
      style={styles.page}
    >
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>
          <Text style={styles.title}>Inscription</Text>
        </View>

        <Text style={styles.titlecodeV}>Code de vérification</Text>
        <Text style={styles.section}>
          Entrez le code reçu (simulation affichée en popup)
        </Text>

        {/* Code OTP */}
        <Text style={styles.titleOtp}>Code OTP</Text>
        <View style={styles.input}>
          <Ionicons name="key-outline" size={20} />
          <TextInput
            placeholder="code OTP"
            keyboardType="number-pad"
            style={styles.inputText}
            value={enteredOtp}
            onChangeText={setEnteredOtp}
            placeholderTextColor="#999"
          />
        </View>

        {/* Bouton Vérification */}
        <PrimaryButton title="Se connecter" onPress={handleVerify} />

        {/* Bouton test admin */}
        <TouchableOpacity onPress={() => router.replace("/admin/dashboard")}>
          <Text style={{ textAlign: "center", marginTop: 12, fontSize: 15 }}>
            Test Admin
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ECE8D8",
    paddingTop: 50,
    padding: 16
  },
  card: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    paddingBottom: 380
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#C49A3A",
    alignItems: "center"
  },
  titlecodeV: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 22,
    padding: 12
  },
  section: {
    marginTop: 10,
    marginBottom: 8,
    fontSize: 16
  },
  titleOtp: {
    fontSize: 18,
    marginTop: 12,
    fontWeight: "bold"
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2C98B",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 6,
    height: 46,
    backgroundColor: "white",
    overflow: "hidden"
  },
  inputText: {
    flex: 1,
    marginLeft: 8,
    padding: 0,
    margin: 0,
    backgroundColor: "transparent",
    ...({ outlineStyle: "none" } as any)
  }
})






