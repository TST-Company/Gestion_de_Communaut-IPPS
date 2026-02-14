// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//     Button,
//     ScrollView
// } from "react-native"
// import { useState } from "react"
// import { useRouter } from "expo-router"
// import { Ionicons } from "@expo/vector-icons"
// import Checkbox from "expo-checkbox"
// import PrimaryButton from "@/components/primaryButton"


// export default function Register() {
//   const router = useRouter()

//   const [firstName, setFirst] = useState("")
//   const [lastName, setLast] = useState("")
//   const [phone, setPhone] = useState("")
//   const [channel, setChannel] = useState<"whatsapp" | "sms">("whatsapp")
//   const [accepted, setAccepted] = useState(false)

//   return (
//     <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff", borderRadius: 15, justifyContent: "center" }} style={styles.page}>
//       <View style={styles.card}>
//         {/* Header */}
//         <View style={styles.header}>
//           <TouchableOpacity onPress={() => router.back()}>
//             <Ionicons name="arrow-back" size={24} />
//           </TouchableOpacity>

//           <Text style={styles.title}>Inscription</Text>
//         </View>

//         <Text style={styles.section}>Vos coordonnées</Text>

//         <Text style={styles.titleInput}>Prenom</Text>
//         {/* Prénom */}
//         <View style={styles.input}>
//           <Ionicons name="person-outline" size={20} />
//           {/* <TextInput
//             placeholder="Prénom"
//             style={styles.inputText}
//             value={firstName}
//             onChangeText={setFirst}
//           /> */}
//           <TextInput
//             placeholder="Entrer votre Prénom"
//             style={styles.inputText}
//             value={firstName}
//             onChangeText={setFirst}
//             // underlineColorAndroid="transparent"
//             // selectionColor="transparent"
//             // cursorColor="#C49A3A"
//             placeholderTextColor="#999"
//             // backgroundColor="transparent"
//         />

//         </View>

//         {/* Nom */}
//           <Text style={styles.titleInput}>Nom</Text>
//         <View style={styles.input}>
//           <Ionicons name="person-outline" size={20} />
//           <TextInput
//             placeholder="Votre Nom"
//             style={styles.inputText}
//             value={lastName}
//             onChangeText={setLast}
//             placeholderTextColor="#999"
//           />
//         </View>

//         {/* Téléphone */}
//         <Text style={styles.titleInput}>Téléphone</Text>
//         <View style={styles.input}>
//           <Ionicons name="call-outline" size={20} />
//           <TextInput
//             placeholder="Numéro de téléphone"
//             keyboardType="phone-pad"
//             style={styles.inputText}
//             value={phone}
//             onChangeText={setPhone}
//             placeholderTextColor="#999"
//           />
//         </View>

//         <Text style={styles.sectionCanal}>Canal de réception préférer</Text>


//         {/* Channels */}
//         <View style={styles.channels}>
//         <TouchableOpacity
//             style={[
//             styles.channel,
//             channel === "whatsapp" && styles.channelActiveWhatsapp  // Style spécifique WhatsApp
//             ]}
//             onPress={() => setChannel("whatsapp")}
//         >
//             {channel === "whatsapp" && (
//             <View style={styles.checkmarkWhatsapp}>
//                 <Ionicons name="checkmark" size={16} color="white" />
//             </View>
//             )}
//             <Ionicons 
//             name="logo-whatsapp" 
//             size={26} 
//             color={channel === "whatsapp" ? "#25D366" : "#666"} 
//             />
//             <Text style={channel === "whatsapp" && styles.channelTextActiveWathApp}>
//             WhatsApp
//             </Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//             style={[
//             styles.channel,
//             channel === "sms" && styles.channelActiveSms  // Style spécifique SMS
//             ]}
//             onPress={() => setChannel("sms")}
//         >
//             {channel === "sms" && (
//             <View style={styles.checkmarkSms}>
//                 <Ionicons name="checkmark" size={16} color="white" />
//             </View>
//             )}
//             <Ionicons 
//             name="chatbubble-outline" 
//             size={26} 
//             color={channel === "sms" ? "#007AFF" : "#666"} 
//             />
//             <Text style={channel === "sms" && styles.channelTextActiveSms}>
//             Message
//             </Text>
//         </TouchableOpacity>
//         </View>

//         {/* Checkbox */}
//         <View style={styles.checkboxRow}>
//           <Checkbox value={accepted} onValueChange={setAccepted} />
//           {/* Ce approche est interdit en react native */}
//           {/* <Text style={styles.checkboxText}>
//             J'accepte les <a href="#">Conditions d'utilisation</a> et la réception de notifications via l'application, WhatsApp et SMS
//           </Text> */}
//             {/* Approche recommandée pour React Native (sans lien cliquable dans le texte, mais avec une partie du texte stylisée et cliquable) : */}
//           <Text style={styles.checkboxText}>
//             J'accepte les{" "}
//             <Text 
//               style={{ color: "#C49A3A", textDecorationLine: "underline" }}
//               onPress={() => {
//                 // Ouvrir les conditions d'utilisation
//                 console.log("Ouvrir les conditions")
//               }}
//             >
//               Conditions d'utilisation
//             </Text>
//             {" "}et la réception de notifications via l'application, WhatsApp et SMS
//           </Text>
//         </View>

//         {/* <TouchableOpacity style={styles.mainButton} onPress={() => router.push("/register-otp")}>
//           <Text style={styles.mainButtonText}>Recevoir le code</Text>
//         </TouchableOpacity> */}
//         <PrimaryButton
//           title="Se connecter"
//           onPress={() => router.push("/register-otp")}
//         />

//         {/* Login */}
//         <TouchableOpacity onPress={() => router.push("/login")}>
//           <Text style={{ textAlign: "center", marginTop: 12, fontSize: 15 }}>Vous avez déjà un compte ?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => router.push("/login")}>
//           <Text style={styles.login}>Se connecter</Text>
//         </TouchableOpacity>
        
//       </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: "#ECE8D8",
//     // justifyContent: "center",
//     paddingTop: 40,
//     padding: 16,
//     // justifyContent: "center"
    
//   },

//   card: {
//     backgroundColor: "white",
//     borderRadius: 5,
//     padding: 30
//   },

//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 12,
//     marginBottom: 12
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#C9A44C",
//     alignItems: "center"
//     // marginLeft: 8
//   },

//   section: {
//     marginTop: 20,
//     marginBottom: 8,
//     fontWeight: "600",
//     fontSize: 24,
//     // marginTop: 22
//   },
//   sectionCanal: {
//     marginTop: 20,
//     marginBottom: 8,
//     fontWeight: "600",
//     fontSize: 22,
//     textAlign: "center"
//   },

//   input: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#E2C98B",
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginVertical: 6,
//     height: 46,
//     backgroundColor: "white",
//     overflow: "hidden" 
//   },
//   titleInput: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginTop: 12,
//     marginBottom: 4,

//   },

//   inputText: {
//     flex: 1,
//     marginLeft: 8,
//     padding: 0,           // ← Important
//     margin: 0,            // ← Important
//     backgroundColor: "transparent",
    
//     // @ts-ignore - outline est pour le web,
//     // outlineStyle: "none",
//       ...({ outlineStyle: "none" } as any) 
//   },

//   channels: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginVertical: 10,
//     marginTop: 15
//   },

// channel: {
//   width: "48%",
//   borderWidth: 2,
//   borderColor: "#E2C98B",
//   borderRadius: 12,
//   alignItems: "center",
//   padding: 10,
//   position: "relative"
// },

// // Style actif pour WhatsApp (bordure verte)
// channelActiveWhatsapp: {
//   backgroundColor: "#E8F5E9",  // Fond vert clair
//   borderColor: "#25D366"       // Bordure verte WhatsApp
// },

// // Style actif pour SMS (bordure bleue)
// channelActiveSms: {
//   backgroundColor: "#E3F2FD",  // Fond bleu clair
//   borderColor: "#007AFF",       // Bordure bleue SMS
// },

// // Texte actif (optionnel - pour rendre le texte en gras)
// channelTextActiveWathApp: {
//   fontWeight: "bold",
//   color: "#25D366"
// },
// channelTextActiveSms: {
//   fontWeight: "bold",
//   color: "#007AFF"
// },

// // Coche verte pour WhatsApp
// checkmarkWhatsapp: {
//   position: "absolute",
//   top: -8,
//   right: -8,
//   backgroundColor: "#25D366",  // Vert WhatsApp
//   borderRadius: 12,
//   width: 24,
//   height: 24,
//   justifyContent: "center",
//   alignItems: "center",
//   borderWidth: 2,
//   borderColor: "white"
// },

// // Coche bleue pour SMS
// checkmarkSms: {
//   position: "absolute",
//   top: -8,
//   right: -8,
//   backgroundColor: "#007AFF",  // Bleu SMS
//   borderRadius: 12,
//   width: 24,
//   height: 24,
//   justifyContent: "center",
//   alignItems: "center",
//   borderWidth: 2,
//   borderColor: "white"
// },

//   checkboxRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//     marginVertical: 10,
//     marginTop: 22
//   },

//   checkboxText: {
//     flex: 1,
//     fontSize: 12,

//   },


//   login: {
//     textAlign: "center",
//     fontWeight: "bold",
//     marginTop: 4,
//     fontSize: 18
//   },
// })



// Version avec OTP

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  ScrollView,
  Alert  // ⬅️ AJOUTÉ : Pour afficher des messages popup
} from "react-native"
import { useState } from "react"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import PrimaryButton from "@/components/primaryButton"
// ⬅️ AJOUTÉ : Import du service OTP qu'on a créé
import { sendOTP } from "../../utils/otp-service"
// ⬅️ AJOUTÉ : Pour sauvegarder les données temporairement
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Register() {
  const router = useRouter()

  const [firstName, setFirst] = useState("")
  const [lastName, setLast] = useState("")
  const [phone, setPhone] = useState("")
  const [channel, setChannel] = useState<"whatsapp" | "sms">("whatsapp")
  const [accepted, setAccepted] = useState(false)
  // ⬅️ AJOUTÉ : Pour afficher "Envoi..." pendant le chargement
  const [loading, setLoading] = useState(false)

  // ========================================
  // ⬅️ FONCTION AJOUTÉE : Gère l'envoi du code OTP
  // ========================================
  const handleSendOTP = async () => {
    // ÉTAPE 1 : Vérifier que tous les champs sont remplis
    if (!firstName || !lastName || !phone) {
      Alert.alert('❌ Erreur', 'Veuillez remplir tous les champs')
      return // On arrête ici si un champ est vide
    }

    // ÉTAPE 2 : Vérifier que l'utilisateur a accepté les conditions
    if (!accepted) {
      Alert.alert('❌ Erreur', 'Veuillez accepter les conditions d\'utilisation')
      return // On arrête ici si pas accepté
    }

    // ÉTAPE 3 : Afficher le chargement (le bouton va dire "Envoi...")
    setLoading(true)

    try {
      // ÉTAPE 4 : Envoyer le code OTP (pour l'instant en simulation)
      console.log('📤 Envoi du code OTP...')
      const result = await sendOTP(phone, channel)
      console.log('✅ Code envoyé avec succès !', result)
      
      // ÉTAPE 5 : Sauvegarder les informations pour la prochaine page
      // (On en aura besoin pour créer l'utilisateur après vérification du code)
      await AsyncStorage.setItem('register_firstName', firstName)
      await AsyncStorage.setItem('register_lastName', lastName)
      await AsyncStorage.setItem('register_phone', phone)
      await AsyncStorage.setItem('register_channel', channel)
      await AsyncStorage.setItem("register_otp", result.code) // ⬅️ AJOUTÉ
      
      console.log('💾 Données sauvegardées')
      
      // ÉTAPE 6 : Afficher un message de succès avec le code
      // (En mode DEV seulement - en production, le code sera envoyé par SMS)
      Alert.alert(
        '✅ Code envoyé !',
        `📱 ${channel === 'whatsapp' ? 'WhatsApp' : 'SMS'}\n\n` +
        `🔧 MODE DÉVELOPPEMENT\n` +
        `Code: ${result.code}\n\n` +
        `(En production, vous recevrez ce code par SMS/WhatsApp)`,
        [
          {
            text: 'OK',
            onPress: () => {
              // ÉTAPE 7 : Aller à la page de vérification du code
              console.log('➡️ Navigation vers register-otp')
              router.push('/register-otp')
            }
          }
        ]
      )
    } catch (error: any) {
      // ÉTAPE 8 : Si quelque chose ne va pas, afficher l'erreur
      console.error('❌ Erreur lors de l\'envoi:', error)
      Alert.alert('❌ Erreur', error.message || 'Une erreur est survenue')
    } finally {
      // ÉTAPE 9 : Cacher le chargement (peu importe si ça a marché ou pas)
      setLoading(false)
    }
  }
  // ========================================

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff", borderRadius: 15, justifyContent: "center" }} style={styles.page}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} />
          </TouchableOpacity>

          <Text style={styles.title}>Inscription</Text>
        </View>

        <Text style={styles.section}>Vos coordonnées</Text>

        <Text style={styles.titleInput}>Prenom</Text>
        {/* Prénom */}
        <View style={styles.input}>
          <Ionicons name="person-outline" size={20} />
          <TextInput
            placeholder="Entrer votre Prénom"
            style={styles.inputText}
            value={firstName}
            onChangeText={setFirst}
            placeholderTextColor="#999"
        />
        </View>

        {/* Nom */}
        <Text style={styles.titleInput}>Nom</Text>
        <View style={styles.input}>
          <Ionicons name="person-outline" size={20} />
          <TextInput
            placeholder="Votre Nom"
            style={styles.inputText}
            value={lastName}
            onChangeText={setLast}
            placeholderTextColor="#999"
          />
        </View>

        {/* Téléphone */}
        <Text style={styles.titleInput}>Téléphone</Text>
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

        <Text style={styles.sectionCanal}>Canal de réception préférer</Text>

        {/* Channels */}
        <View style={styles.channels}>
        <TouchableOpacity
            style={[
            styles.channel,
            channel === "whatsapp" && styles.channelActiveWhatsapp
            ]}
            onPress={() => setChannel("whatsapp")}
        >
            {channel === "whatsapp" && (
            <View style={styles.checkmarkWhatsapp}>
                <Ionicons name="checkmark" size={16} color="white" />
            </View>
            )}
            <Ionicons 
            name="logo-whatsapp" 
            size={26} 
            color={channel === "whatsapp" ? "#25D366" : "#666"} 
            />
            <Text style={channel === "whatsapp" && styles.channelTextActiveWathApp}>
            WhatsApp
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[
            styles.channel,
            channel === "sms" && styles.channelActiveSms
            ]}
            onPress={() => setChannel("sms")}
        >
            {channel === "sms" && (
            <View style={styles.checkmarkSms}>
                <Ionicons name="checkmark" size={16} color="white" />
            </View>
            )}
            <Ionicons 
            name="chatbubble-outline" 
            size={26} 
            color={channel === "sms" ? "#007AFF" : "#666"} 
            />
            <Text style={channel === "sms" && styles.channelTextActiveSms}>
            Message
            </Text>
        </TouchableOpacity>
        </View>

        {/* Checkbox */}
        <View style={styles.checkboxRow}>
          <Checkbox value={accepted} onValueChange={setAccepted} />
          <Text style={styles.checkboxText}>
            J'accepte les{" "}
            <Text 
              style={{ color: "#C49A3A", textDecorationLine: "underline" }}
              onPress={() => {
                console.log("Ouvrir les conditions")
              }}
            >
              Conditions d'utilisation
            </Text>
            {" "}et la réception de notifications via l'application, WhatsApp et SMS
          </Text>
        </View>

        {/* ========================================
            ⬅️ BOUTON MODIFIÉ
            - Appelle handleSendOTP au lieu d'aller directement à /register-otp
            - Affiche "Envoi..." pendant le chargement
            - Désactivé pendant le chargement
        ======================================== */}
        <PrimaryButton
          title={loading ? "Envoi..." : "Recevoir le code"}
          onPress={handleSendOTP}
          disabled={loading}
        />
        {/* <PrimaryButton
          title={loading ? "Envoi..." : "Recevoir le code"}
          // onPress={handleSendOTP}
          disabled={loading}
          onPress={() => router.push("/register-otp")}
        /> */}

        {/* Login */}
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={{ textAlign: "center", marginTop: 12, fontSize: 15 }}>
            Vous avez déjà un compte ?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text style={styles.login}>Se connecter</Text>
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
    padding: 16,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 30
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
    color: "#C9A44C",
    alignItems: "center"
  },

  section: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "600",
    fontSize: 24,
  },
  
  sectionCanal: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "600",
    fontSize: 22,
    textAlign: "center"
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
  
  titleInput: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 4,
  },

  inputText: {
    flex: 1,
    marginLeft: 8,
    padding: 0,
    margin: 0,
    backgroundColor: "transparent",
    ...({ outlineStyle: "none" } as any) 
  },

  channels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginTop: 15
  },

  channel: {
    width: "48%",
    borderWidth: 2,
    borderColor: "#E2C98B",
    borderRadius: 12,
    alignItems: "center",
    padding: 10,
    position: "relative"
  },

  channelActiveWhatsapp: {
    backgroundColor: "#E8F5E9",
    borderColor: "#25D366"
  },

  channelActiveSms: {
    backgroundColor: "#E3F2FD",
    borderColor: "#007AFF",
  },

  channelTextActiveWathApp: {
    fontWeight: "bold",
    color: "#25D366"
  },
  
  channelTextActiveSms: {
    fontWeight: "bold",
    color: "#007AFF"
  },

  checkmarkWhatsapp: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#25D366",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white"
  },

  checkmarkSms: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#007AFF",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white"
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 10,
    marginTop: 22
  },

  checkboxText: {
    flex: 1,
    fontSize: 12,
  },

  login: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 4,
    fontSize: 18
  },
})




