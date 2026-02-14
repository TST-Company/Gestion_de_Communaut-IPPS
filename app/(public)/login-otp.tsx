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
// import PrimaryButton from '../../components/primaryButton';

// export default function Login() {
//     const router = useRouter()
//     const [phone, setPhone] =  useState("")
//     return (
//           // <ScrollView style={styles.page}>
//           <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff", borderRadius: 15, justifyContent: "center" }} style={styles.page}>
          
//               <View style={styles.card}>
//                 {/* Header */}
//                 <View style={styles.header}>
//                   <TouchableOpacity onPress={() => router.back()}>
//                     <Ionicons name="arrow-back" size={24} />
//                   </TouchableOpacity>

//                 <Text style={styles.title}>Connexion</Text>                  
//                 </View>
//                   <Text style={styles.section}>Code de vérification?</Text>
//                   <Text style={styles.codeReçu}>Entrez le code reçu au +221 77 723 77 20 </Text>
                  
//                 {/* Code OTP */}
//                 <Text style={styles.titleOpt}>Code OTP</Text>
//                 <View style={styles.input}>
//                   <Ionicons name="call-outline" size={20} />
//                   <TextInput
//                     placeholder="Entrer le Code OTP"
//                     keyboardType="phone-pad"
//                     style={styles.inputText}
//                     value={phone}
//                     onChangeText={setPhone}
//                     placeholderTextColor="#999"
//                   />
//                 </View>
        
//                 {/* Button */}
//                 <PrimaryButton 
//                   title="Se connecter"
//                   onPress={() => router.push("/dashboard")}
//                 />
                 
//                 <TouchableOpacity onPress={() => router.push("/login")}>
//                   <Text style={{ textAlign: "center", marginTop: 12 }}>Modifier le numéro </Text>
//                 </TouchableOpacity>
                 

//               </View>
//         </ScrollView>
//     )
// }


// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: "#ECE8D8",
//     paddingTop: 50,
//     padding: 16
//   },

//   card: {
//     backgroundColor: "white",
//     borderRadius: 5,
//     padding: 20,
//     paddingBottom: 380
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
//     color: "#C49A3A",
//     alignItems: "center"
//     // marginLeft: 8
//   },
//    titleOpt: {
//     marginTop: 12,
//     fontSize: 16,
//     fontWeight: "bold"
//   },

//   section: {
//     marginTop: 12,
//     marginBottom: 8,
//     fontWeight: "600",
//     fontSize: 24,
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
// codeReçu: {
//    marginTop: 20,
//   fontSize: 14
// },

// })








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
import { useState, useEffect } from "react"  // ⬅️ useEffect ajouté
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import PrimaryButton from '@/components/primaryButton'
import AsyncStorage from '@react-native-async-storage/async-storage'  // ⬅️ AJOUTÉ
import { findUserByPhone, formatPhoneDisplay } from "@/utils/user-simulation"


export default function LoginOTP() {
  const router = useRouter()
  
  const [enteredOtp, setEnteredOtp] = useState("")  // ⬅️ Code saisi par l'utilisateur
  const [savedOtp, setSavedOtp] = useState("")      // ⬅️ Code sauvegardé
  const [phone, setPhone] = useState("")            // ⬅️ Téléphone sauvegardé
  const [loading, setLoading] = useState(false)     // ⬅️ État de chargement

  // ========================================
  // ⬅️ AJOUTÉ : Charger les données au démarrage
  // ========================================
  useEffect(() => {
    async function loadData() {
      console.log('📂 Chargement des données de connexion...')
      
      const savedPhone = await AsyncStorage.getItem('login_phone')
      const savedCode = await AsyncStorage.getItem('login_otp')
      
      console.log('📱 Téléphone récupéré:', savedPhone)
      console.log('🔢 Code OTP récupéré:', savedCode)
      
      if (savedPhone) setPhone(savedPhone)
      if (savedCode) setSavedOtp(savedCode)
      
      // Si pas de données, retour à la page de connexion
      if (!savedPhone || !savedCode) {
        Alert.alert(
          '⚠️ Session expirée',
          'Veuillez recommencer la connexion',
          [{ text: 'OK', onPress: () => router.replace('/login') }]
        )
      }
    }
    
    loadData()
  }, [])

  // ========================================
  // ⬅️ FONCTION AJOUTÉE : Déterminer le rôle selon le téléphone
  // ========================================
  // function getUserRole(phoneNumber: string): string {
  //   // 🔧 MODE SIMULATION - En production, le rôle viendra de Supabase
  //   console.log('🔍 Détermination du rôle pour:', phoneNumber)
    
  //   // Exemples de numéros pour tester différents rôles
  //   if (phoneNumber.includes('567')) {
  //     console.log('👤 Rôle: user')
  //     return 'user'
  //   } else if (phoneNumber.includes('568')) {
  //     console.log('👔 Rôle: manager')
  //     return 'manager'
  //   } else if (phoneNumber.includes('569')) {
  //     console.log('👑 Rôle: super_admin')
  //     return 'super_admin'
  //   }
    
  //   // Par défaut : user
  //   console.log('👤 Rôle par défaut: user')
  //   return 'user'
  // }


  // ========================================
  // ⬅️ FONCTION AJOUTÉE : Vérifier le code OTP
  // ========================================
  // const handleVerifyOTP = async () => {
  //   console.log('🔵 VÉRIFICATION - Bouton cliqué')
  //   console.log('🔢 Code saisi:', enteredOtp)
  //   console.log('💾 Code sauvegardé:', savedOtp)

  //   // ÉTAPE 1 : Vérifier que l'utilisateur a saisi un code
  //   if (!enteredOtp || enteredOtp.trim().length !== 6) {
  //     Alert.alert('❌ Erreur', 'Veuillez entrer le code à 6 chiffres')
  //     return
  //   }

  //   setLoading(true)

  //   try {
  //     // ÉTAPE 2 : Comparer les codes (avec trim pour éviter les espaces)
  //     if (enteredOtp.trim() === savedOtp.trim()) {
  //       console.log('✅ Code correct !')
        
  //       // ÉTAPE 3 : Déterminer le rôle de l'utilisateur
  //       const role = getUserRole(phone)
        
  //       // ÉTAPE 4 : Sauvegarder les informations de session
  //       await AsyncStorage.setItem('user_phone', phone)
  //       await AsyncStorage.setItem('user_role', role)
  //       await AsyncStorage.setItem('user_logged_in', 'true')
  //       console.log('💾 Session utilisateur créée')
        
  //       // ÉTAPE 5 : Nettoyer les données temporaires
  //       await AsyncStorage.removeItem('login_phone')
  //       await AsyncStorage.removeItem('login_otp')
        
  //       // ÉTAPE 6 : Rediriger vers le bon dashboard selon le rôle
  //       console.log(`➡️ Redirection vers le dashboard ${role}`)
        
  //       Alert.alert(
  //         '✅ Connexion réussie !',
  //         `Bienvenue en tant que ${role === 'super_admin' ? 'Administrateur' : role === 'manager' ? 'Gestionnaire' : 'Utilisateur'}`,
  //         [
  //           {
  //             text: 'OK',
  //             onPress: () => {
  //               // Redirection selon le rôle
  //               if (role === 'super_admin') {
  //                 router.replace('/(admin)/dashboard' as any)
  //               } else if (role === 'manager') {
  //                 // TODO: Créer le dashboard manager
  //                 router.replace('/(admin)/dashboard' as any)  // Temporaire
  //               } else {
  //                 // TODO: Créer le dashboard user
  //                 router.replace('/(admin)/dashboard' as any)  // Temporaire
  //               }
  //             }
  //           }
  //         ]
  //       )
  //     } else {
  //       // Code incorrect
  //       console.log('❌ Code incorrect')
  //       Alert.alert(
  //         '❌ Code invalide',
  //         'Le code que vous avez saisi est incorrect.\n\nVérifiez le code reçu et réessayez.'
  //       )
  //     }
  //   } catch (error: any) {
  //     console.error('❌ Erreur:', error)
  //     Alert.alert('❌ Erreur', error.message || 'Une erreur est survenue')
  //   } finally {
  //     setLoading(false)
  //   }
  // }
  // ========================================

  const handleVerifyOTP = async () => {
    console.log('🔵 VÉRIFICATION - Bouton cliqué')
    console.log('🔢 Code saisi:', enteredOtp)
    console.log('💾 Code sauvegardé:', savedOtp)

    if (!enteredOtp || enteredOtp.trim().length !== 6) {
      Alert.alert('❌ Erreur', 'Veuillez entrer le code à 6 chiffres')
      return
    }

    setLoading(true)

    try {
      // ÉTAPE 1 : Vérifier le code OTP
      if (enteredOtp.trim() !== savedOtp.trim()) {
        console.log('❌ Code incorrect')
        Alert.alert(
          '❌ Code invalide',
          'Le code que vous avez saisi est incorrect.\n\nVérifiez le code reçu et réessayez.'
        )
        setLoading(false)
        return
      }

      console.log('✅ Code correct !')

      // ÉTAPE 2 : Chercher l'utilisateur dans la simulation
      const user = findUserByPhone(phone)

      if (!user) {
        // Utilisateur non trouvé dans la simulation
        Alert.alert(
          '❌ Utilisateur non trouvé',
          'Ce numéro n\'est pas enregistré.\n\nNuméros de test disponibles :\n' +
          '+221771234569 (Admin)\n' +
          '+221771234568 (Gestionnaire)\n' +
          '+221771234567 (Lecteur)'
        )
        setLoading(false)
        return
      }

      // ÉTAPE 3 : Créer la session utilisateur
      console.log(`👤 Connexion en tant que: ${user.firstName} ${user.lastName}`)
      console.log(`🎭 Rôle: ${user.role}`)
      console.log(`🏠 Dashboard: ${user.dashboard}`)

      await AsyncStorage.setItem('user_phone', phone)
      await AsyncStorage.setItem('user_role', user.role)
      await AsyncStorage.setItem('user_firstName', user.firstName)
      await AsyncStorage.setItem('user_lastName', user.lastName)
      await AsyncStorage.setItem('user_logged_in', 'true')
      console.log('💾 Session utilisateur créée')

      // ÉTAPE 4 : Nettoyer les données temporaires
      await AsyncStorage.removeItem('login_phone')
      await AsyncStorage.removeItem('login_otp')

      // ÉTAPE 5 : Afficher le message de bienvenue et rediriger
      const roleDisplay = 
        user.role === 'super_admin' 
          ? 'Administrateur' 
          : user.role === 'gestionnaire_contenu' 
          ? 'Gestionnaire' 
          : 'Lecteur'

      Alert.alert(
        '✅ Connexion réussie !',
        `Bienvenue ${user.firstName} ${user.lastName}\n\nRôle : ${roleDisplay}`,
        [
          {
            text: 'OK',
            onPress: () => {
              console.log(`➡️ Redirection vers ${user.dashboard}`)
              router.push(user.dashboard as any)
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

        <Text style={styles.section}>Code de vérification</Text>
        <Text style={styles.codeReçu}>
          {/* Entrez le code reçu au {phone || '+221 XX XXX XX XX'} */}
          Entrez le code reçu au {formatPhoneDisplay(phone)}
        </Text>
        
        {/* Code OTP */}
        <Text style={styles.titleOpt}>Code OTP</Text>
        <View style={styles.input}>
          <Ionicons name="lock-closed-outline" size={20} />  
          <TextInput
            placeholder="Entrer le Code OTP"
            keyboardType="number-pad"  
            style={styles.inputText}
            value={enteredOtp}
            onChangeText={setEnteredOtp}
            placeholderTextColor="#999"
            maxLength={6}  // ⬅️ Limite à 6 chiffres
          />
        </View>

        {/* ⬅️ BOUTON MODIFIÉ */}
        <PrimaryButton 
          title={loading ? "Vérification..." : "Se connecter"}
          onPress={handleVerifyOTP}
          disabled={loading}
        />
         
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ textAlign: "center", marginTop: 12 }}>
            Modifier le numéro
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
    padding: 0,
    margin: 0,
    backgroundColor: "transparent",
    ...({ outlineStyle: "none" } as any)
  },

  codeReçu: {
    marginTop: 20,
    fontSize: 14
  },
})