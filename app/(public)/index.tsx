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




// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import { useState } from 'react'

// export default function TestSentConnection() {
//   const [status, setStatus] = useState('Pas encore testé')
//   const [loading, setLoading] = useState(false)

//   const testConnection = async () => {
//     setLoading(true)
//     setStatus('⏳ Test en cours...')

//     try {
//       // Test simple : récupérer la liste des templates (ne coûte rien)
//       const response = await fetch('https://api.sent.dm/api/templates', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-sender-id': process.env.EXPO_PUBLIC_SENT_SENDER_ID || '',
//           'x-api-key': process.env.EXPO_PUBLIC_SENT_API_KEY || '',
//         },
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setStatus(`✅ Connexion API OK!\n\nVos clés fonctionnent correctement.\nTemplates trouvés: ${data.length || 0}`)
//       } else if (response.status === 401) {
//         setStatus(`❌ Erreur d'authentification\n\nVérifiez vos clés:\n- x-sender-id\n- x-api-key`)
//       } else {
//         setStatus(`⚠️ Erreur: ${response.status}\n${JSON.stringify(data, null, 2)}`)
//       }
//     } catch (error: any) {
//       setStatus(`❌ Erreur réseau: ${error.message}\n\nVérifiez votre connexion Internet`)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🔌 Test Connexion Sent API</Text>
      
//       <View style={styles.infoBox}>
//         <Text style={styles.infoTitle}>ℹ️ Ce test vérifie :</Text>
//         <Text style={styles.infoText}>✓ Vos clés API sont valides</Text>
//         <Text style={styles.infoText}>✓ La connexion à Sent fonctionne</Text>
//         <Text style={styles.infoText}>✓ Aucun message n'est envoyé</Text>
//         <Text style={styles.infoText}>✓ Gratuit (ne consomme pas de crédit)</Text>
//       </View>
      
//       <TouchableOpacity 
//         style={[styles.button, loading && styles.buttonDisabled]} 
//         onPress={testConnection}
//         disabled={loading}
//       >
//         <Text style={styles.buttonText}>
//           {loading ? 'Test en cours...' : 'Tester la connexion'}
//         </Text>
//       </TouchableOpacity>
      
//       <View style={styles.resultBox}>
//         <Text style={styles.result}>{status}</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#ECE8D8',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   infoBox: {
//     backgroundColor: '#E8F5E9',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//     borderLeftWidth: 4,
//     borderLeftColor: '#4CAF50',
//   },
//   infoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   infoText: {
//     fontSize: 14,
//     marginBottom: 5,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#C49A3A',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   buttonDisabled: {
//     opacity: 0.5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   resultBox: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     minHeight: 100,
//   },
//   result: {
//     fontSize: 14,
//   },
// })





// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
// import { useState } from 'react'

// export default function TestSentAdvanced() {
//   const [status, setStatus] = useState('Pas encore testé')
//   const [loading, setLoading] = useState(false)

//   const testConnection = async () => {
//     setLoading(true)
//     setStatus('⏳ Test en cours...')

//     const senderId = process.env.EXPO_PUBLIC_SENT_SENDER_ID
//     const apiKey = process.env.EXPO_PUBLIC_SENT_API_KEY

//     // Vérification des clés
//     if (!senderId || !apiKey) {
//       setStatus('❌ ERREUR : Clés API manquantes\n\nVérifiez votre fichier .env et redémarrez le serveur avec : npx expo start -c')
//       setLoading(false)
//       return
//     }

//     try {
//       console.log('🔑 Sender ID:', senderId.substring(0, 10) + '...')
//       console.log('🔑 API Key:', apiKey.substring(0, 10) + '...')
//       console.log('🌐 Envoi de la requête...')

//       const response = await fetch('https://api.sent.dm/api/templates', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-sender-id': senderId,
//           'x-api-key': apiKey,
//         },
//       })

//       console.log('📡 Status:', response.status)
//       console.log('📡 Status Text:', response.statusText)

//       // Lire le texte brut de la réponse
//       const textResponse = await response.text()
//       console.log('📄 Réponse brute:', textResponse)

//       // Essayer de parser en JSON
//       let data
//       try {
//         data = textResponse ? JSON.parse(textResponse) : {}
//       } catch (e) {
//         setStatus(`❌ Erreur de parsing JSON\n\nStatus: ${response.status}\nRéponse brute: ${textResponse.substring(0, 200)}`)
//         setLoading(false)
//         return
//       }

//       if (response.ok) {
//         setStatus(`✅ Connexion API OK!\n\nStatus: ${response.status}\nRéponse: ${JSON.stringify(data, null, 2)}`)
//       } else if (response.status === 401 || response.status === 403) {
//         setStatus(`❌ Erreur d'authentification (${response.status})\n\nVos clés sont incorrectes ou invalides.\n\nVérifiez sur votre dashboard Sent.dm`)
//       } else {
//         setStatus(`⚠️ Erreur ${response.status}\n\n${JSON.stringify(data, null, 2)}`)
//       }
//     } catch (error: any) {
//       console.error('❌ Exception:', error)
//       setStatus(`❌ Erreur réseau détaillée:\n\nMessage: ${error.message}\nType: ${error.name}\n\nVérifiez votre connexion`)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>🔌 Test Connexion Sent API</Text>
      
//       <View style={styles.infoBox}>
//         <Text style={styles.infoTitle}>🔍 Test avancé avec debug</Text>
//         <Text style={styles.infoText}>• Vérifie les clés API</Text>
//         <Text style={styles.infoText}>• Affiche les détails de la réponse</Text>
//         <Text style={styles.infoText}>• Logs dans la console</Text>
//       </View>
      
//       <TouchableOpacity 
//         style={[styles.button, loading && styles.buttonDisabled]} 
//         onPress={testConnection}
//         disabled={loading}
//       >
//         <Text style={styles.buttonText}>
//           {loading ? 'Test en cours...' : 'Tester la connexion'}
//         </Text>
//       </TouchableOpacity>
      
//       <View style={styles.resultBox}>
//         <Text style={styles.result}>{status}</Text>
//       </View>

//       <View style={styles.helpBox}>
//         <Text style={styles.helpTitle}>💡 Si ça ne marche toujours pas :</Text>
//         <Text style={styles.helpText}>1. Ouvrez la console (dans le terminal)</Text>
//         <Text style={styles.helpText}>2. Cherchez les logs qui commencent par 🔑 📡 📄</Text>
//         <Text style={styles.helpText}>3. Envoyez-moi ces logs</Text>
//       </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#ECE8D8',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   infoBox: {
//     backgroundColor: '#E3F2FD',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//     borderLeftWidth: 4,
//     borderLeftColor: '#2196F3',
//   },
//   infoTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   infoText: {
//     fontSize: 14,
//     marginBottom: 5,
//     color: '#333',
//   },
//   button: {
//     backgroundColor: '#C49A3A',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   buttonDisabled: {
//     opacity: 0.5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   resultBox: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     minHeight: 150,
//     marginBottom: 20,
//   },
//   result: {
//     fontSize: 13,
//     fontFamily: 'monospace',
//   },
//   helpBox: {
//     backgroundColor: '#FFF3CD',
//     padding: 15,
//     borderRadius: 10,
//     borderLeftWidth: 4,
//     borderLeftColor: '#FFC107',
//   },
//   helpTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   helpText: {
//     fontSize: 13,
//     marginBottom: 5,
//   },
// })








// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
// import { useState } from 'react'

// export default function TestNetworkBasic() {
//   const [status, setStatus] = useState('Pas encore testé')

//   const testBasicFetch = async () => {
//     setStatus('⏳ Test 1/3...')
    
//     try {
//       // Test 1 : API publique simple
//       const response1 = await fetch('https://httpbin.org/get')
//       const data1 = await response1.json()
//       setStatus(`✅ Test 1 OK (httpbin)\n\n⏳ Test 2/3...`)
      
//       // Test 2 : Google
//       await new Promise(resolve => setTimeout(resolve, 1000))
//       const response2 = await fetch('https://www.google.com')
//       setStatus(`✅ Test 1 OK\n✅ Test 2 OK (Google)\n\n⏳ Test 3/3...`)
      
//       // Test 3 : Sent API (juste ping)
//       await new Promise(resolve => setTimeout(resolve, 1000))
//       const response3 = await fetch('https://api.sent.dm/api/templates', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-sender-id': 'test',
//           'x-api-key': 'test',
//         },
//       })
      
//       setStatus(`✅ Test 1 OK (httpbin)
// ✅ Test 2 OK (Google)
// ✅ Test 3 OK (Sent API accessible)

// Status Sent: ${response3.status}

// ${response3.status === 401 ? '✅ Sent API fonctionne (erreur 401 = clés incorrectes, mais l\'API répond)' : ''}`)
      
//     } catch (error: any) {
//       setStatus(`❌ Échec au test réseau

// Erreur: ${error.message}

// Cela signifie que fetch() ne fonctionne pas du tout sur votre appareil.

// Solutions possibles:
// 1. Redémarrez Expo Go
// 2. Redémarrez votre téléphone
// 3. Essayez sur un autre réseau WiFi`)
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>🌐 Test Réseau Basique</Text>
      
//       <View style={styles.infoBox}>
//         <Text style={styles.infoText}>Ce test va vérifier :</Text>
//         <Text style={styles.infoText}>1. Fetch fonctionne (httpbin)</Text>
//         <Text style={styles.infoText}>2. Internet OK (Google)</Text>
//         <Text style={styles.infoText}>3. API Sent accessible</Text>
//       </View>
      
//       <TouchableOpacity style={styles.button} onPress={testBasicFetch}>
//         <Text style={styles.buttonText}>Lancer les tests</Text>
//       </TouchableOpacity>
      
//       <View style={styles.resultBox}>
//         <Text style={styles.result}>{status}</Text>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#ECE8D8',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   infoBox: {
//     backgroundColor: '#E3F2FD',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   infoText: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   button: {
//     backgroundColor: '#C49A3A',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   resultBox: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 10,
//     minHeight: 150,
//   },
//   result: {
//     fontSize: 14,
//   },
// })