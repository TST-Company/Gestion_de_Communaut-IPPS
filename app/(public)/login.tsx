import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert  // ⬅️ AJOUTÉ
} from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import PrimaryButton from '@/components/primaryButton'
// ⬅️ AJOUTÉS
import { sendOTP } from "@/utils/otp-service"
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login() {
  const router = useRouter()

  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)  
  const [channel] = useState<"whatsapp" | "sms">("whatsapp")   

  // ========================================
  // FONCTION AJOUTÉE : Gère l'envoi du code OTP
  // ========================================
  const handleSendOTP = async () => {
    console.log('🔵 CONNEXION - Bouton cliqué')
    console.log('📱 Téléphone:', phone)

    // ÉTAPE 1 : Vérifier que le téléphone est rempli
    if (!phone || phone.trim().length < 9) {
      Alert.alert('❌ Erreur', 'Veuillez entrer un numéro de téléphone valide')
      return
    }

    // ÉTAPE 2 : Vérifier que l'utilisateur existe (simulation)
    // En production, vous vérifierez dans Supabase
    console.log('✅ Téléphone valide, envoi du code...')
    
    setLoading(true)

    try {
      // ÉTAPE 3 : Envoyer le code OTP
      console.log('📤 Envoi du code OTP de connexion...')

        // 1️⃣ Formater le numéro AVANT l'envoi
      let formattedPhone = phone.trim()
      
      if (!formattedPhone.startsWith("+")) {
        formattedPhone = "+221" + formattedPhone
      }

      // 2️⃣ Envoyer le numéro formaté
      const result = await sendOTP(phone, channel)
      
      console.log('✅ Code envoyé !', result)

      // ÉTAPE 4 : Sauvegarder le téléphone et le code pour la vérification
      await AsyncStorage.setItem('login_phone', phone)
      await AsyncStorage.setItem('login_otp', result.code!)
      console.log('💾 Données sauvegardées')

      // ÉTAPE 5 : Afficher le code en mode dev
      Alert.alert(
        '✅ Code envoyé !',
        `📱 ${channel === 'whatsapp' ? 'WhatsApp' : 'SMS'}\n\n` +
        `🔧 MODE DÉVELOPPEMENT\n` +
        `Code: ${result.code}\n\n` +
        `(Notez ce code pour vous connecter)`,
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('➡️ Navigation vers /login-otp')
              router.push('/login-otp')
            }
          }
        ]
      )
    } catch (error: any) {
      console.error('❌ Erreur:', error)
      Alert.alert('❌ Erreur', error.message || 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }
  // ========================================

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
          <Text style={styles.title}>Connexion</Text>                  
        </View>

        <Text style={styles.section}>Quel est votre numéro ?</Text>
        <Text style={styles.text}>
          Nous vous enverrons un code de connexion sécurisé.
        </Text>
        
        {/* Téléphone */}
        <Text style={styles.titleTelephone}>Téléphone</Text>
        <View style={styles.input}>
          <Ionicons name="call-outline" size={20} />
          <TextInput
            placeholder="Numéro de téléphone"
            keyboardType="phone-pad"
            style={styles.inputText}
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#999"
          />
        </View>

        {/* BOUTON MODIFIÉ */}
        <PrimaryButton
          title={loading ? "Envoi..." : "Recevoir le code"}
          onPress={handleSendOTP}
          disabled={loading}
        />

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={{ textAlign: "center", marginTop: 12 }}>
            Vous n'avez pas de compte ?
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
    paddingTop: 40,
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

  section: {
    marginTop: 10,
    marginBottom: 8,
    fontWeight: "600",
    fontSize: 24
  },

  titleTelephone: {
    marginTop: 12,
    fontSize: 16,
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
  },

  text: {
    marginTop: 20,
    fontSize: 14
  },

  mainButton: {
    backgroundColor: "#E6D3A3",
    borderRadius: 30,
    paddingVertical: 14,
    marginTop: 10
  },

  mainButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white", 
    fontSize: 23
  },
})


