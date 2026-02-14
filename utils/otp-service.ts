import AsyncStorage from '@react-native-async-storage/async-storage'

// Mode développement : simulation
const DEV_MODE = true // ⬅️ Quand Sent sera prêt, mettre false

interface OTPResponse {
  success: boolean
  code?: string
  message: string
}

/**
 * 📱 Envoie un code OTP
 * Pour l'instant : SIMULATION (pas de vrai SMS)
 */
export async function sendOTP(
  phone: string, 
  channel: 'whatsapp' | 'sms'
): Promise<OTPResponse> {
  
  console.log('🔧 MODE SIMULATION')
  console.log('📱 Téléphone:', phone)
  console.log('📡 Canal:', channel)
  
  // Générer un code à 6 chiffres
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  console.log('🔢 Code généré:', otp)
  
  // Sauvegarder le code pour plus tard
  await AsyncStorage.setItem('temp_otp', otp)
  await AsyncStorage.setItem('temp_phone', phone)
  
  // Attendre 1.5 secondes (comme un vrai réseau)
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  return {
    success: true,
    code: otp, // On retourne le code pour les tests
    message: `Code envoyé à ${phone}`
  }
}

/**
 * ✅ Vérifie si le code est correct
 */
export async function verifyOTP(
  phone: string,
  code: string
): Promise<boolean> {
  
  console.log('🔍 Vérification OTP')
  console.log('📱 Téléphone:', phone)
  console.log('🔢 Code saisi:', code)
  
  // Récupérer le code sauvegardé
  const savedCode = await AsyncStorage.getItem('temp_otp')
  const savedPhone = await AsyncStorage.getItem('temp_phone')
  
  console.log('💾 Code enregistré:', savedCode)
  console.log('💾 Téléphone enregistré:', savedPhone)
  
  // Vérifier le téléphone
  if (phone !== savedPhone) {
    throw new Error('Numéro incorrect')
  }
  
  // Vérifier le code
  if (code !== savedCode) {
    throw new Error('Code incorrect')
  }
  
  // Tout est bon ! Nettoyer
  await AsyncStorage.removeItem('temp_otp')
  await AsyncStorage.removeItem('temp_phone')
  
  console.log('✅ Code vérifié avec succès')
  return true
}