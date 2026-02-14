import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState } from "react"
import { Asset } from "expo-asset"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Asset.loadAsync([
          require("../assets/images/logo_ipps.png"),
        ])
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Groupe public */}
        <Stack.Screen name="(public)/index" />
        <Stack.Screen name="(public)/login" />
        <Stack.Screen name="(public)/login-otp" />
        <Stack.Screen name="(public)/register" />
        <Stack.Screen name="(public)/register-success" />
        <Stack.Screen name="(public)/register-otp" />

        {/* Groupe admin */}
        <Stack.Screen name="admin" />
      </Stack>
    </SafeAreaProvider>
  )
}

// import { Stack } from "expo-router"
// import { SafeAreaProvider } from "react-native-safe-area-context"
// import * as SplashScreen from "expo-splash-screen"
// import { useEffect, useState } from "react"
// import { Asset } from "expo-asset"

// // Empêche le splash screen de se cacher automatiquement
// SplashScreen.preventAutoHideAsync()

// export default function RootLayout() {
//   const [appIsReady, setAppIsReady] = useState(false)

//   useEffect(() => {
//     async function prepare() {
//       try {
//         // Précharge les images
//         await Asset.loadAsync([
//           require("../assets/images/logo_ipps.png"),
//           // Ajoutez d'autres images si nécessaire
//         ])
//       } catch (e) {
//         console.warn(e)
//       } finally {
//         setAppIsReady(true)
//       }
//     }

//     prepare()
//   }, [])

//   useEffect(() => {
//     if (appIsReady) {
//       // Cache le splash screen quand tout est prêt
//       SplashScreen.hideAsync()
//     }
//   }, [appIsReady])

//   if (!appIsReady) {
//     return null // Affiche le splash screen pendant le chargement
//   }

//   return (
//     <SafeAreaProvider>
//       <Stack screenOptions={{ headerShown: false }}>
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//         <Stack.Screen name="(admin)" options={{ headerShown: false }} />
//         <Stack.Screen name="login" options={{ headerShown: false }} />
//         <Stack.Screen name="register" options={{ headerShown: false }} />
//         <Stack.Screen name="register-otp" options={{ headerShown: false }} />
//       </Stack>
//     </SafeAreaProvider>
//   )
// }