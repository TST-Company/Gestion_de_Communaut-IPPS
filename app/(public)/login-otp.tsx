import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
    Button,
    ScrollView
} from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import PrimaryButton from '../../components/primaryButton';

export default function Login() {
    const router = useRouter()
    const [phone, setPhone] =  useState("")
    return (
          // <ScrollView style={styles.page}>
          <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff", borderRadius: 15, justifyContent: "center" }} style={styles.page}>
          
              <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} />
                  </TouchableOpacity>

                <Text style={styles.title}>Connexion</Text>                  
                </View>
                  <Text style={styles.section}>Code de vérification?</Text>
                  <Text style={styles.codeReçu}>Entrez le code reçu au +221 77 723 77 20 </Text>
                  
                {/* Code OTP */}
                <Text style={styles.titleOpt}>Code OTP</Text>
                <View style={styles.input}>
                  <Ionicons name="call-outline" size={20} />
                  <TextInput
                    placeholder="Entrer le Code OTP"
                    keyboardType="phone-pad"
                    style={styles.inputText}
                    value={phone}
                    onChangeText={setPhone}
                    placeholderTextColor="#999"
                  />
                </View>
        
                {/* Button */}
                <PrimaryButton 
                  title="Se connecter"
                  onPress={() => router.push("/admin/dashboard")}
                />
                 
                <TouchableOpacity onPress={() => router.push("/login")}>
                  <Text style={{ textAlign: "center", marginTop: 12 }}>Modifier le numéro </Text>
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
    // marginLeft: 8
  },
   titleOpt: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "bold"
  },

  section: {
    marginTop: 12,
    marginBottom: 8,
    fontWeight: "600",
    fontSize: 24,
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
    padding: 0,           // ← Important
    margin: 0,            // ← Important
    backgroundColor: "transparent",
    // @ts-ignore - outline est pour le web,
    // outlineStyle: "none",
      ...({ outlineStyle: "none" } as any)

  },
codeReçu: {
   marginTop: 20,
  fontSize: 14
},

})

