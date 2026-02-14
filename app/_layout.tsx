// import { Stack, useRouter } from "expo-router"
// import { useEffect } from "react"
// import * as SplashScreen from "expo-splash-screen"
// import { SafeAreaProvider } from "react-native-safe-area-context"



// // Empêche disparition auto
// SplashScreen.preventAutoHideAsync()

// export default function Layout() {
//   const router = useRouter()

//   useEffect(() => {
//     async function prepare() {
//       // Petite pause pour être safe
//       await new Promise(resolve => setTimeout(resolve, 500))

//       // Cache splash natif
//       await SplashScreen.hideAsync()

//       // Go splash React
//       router.replace("/splash")
//     }

//     prepare()
//   }, [])

//   return (
//       <SafeAreaProvider>
//         <Stack screenOptions={{ headerShown: false }} />
//       </SafeAreaProvider>
//     )
// }




// import { Stack } from "expo-router"
// import { useEffect } from "react"
// import * as SplashScreen from "expo-splash-screen"
// import { SafeAreaProvider } from "react-native-safe-area-context"
// import { StatusBar } from "expo-status-bar"

// SplashScreen.preventAutoHideAsync()

// export default function Layout() {
//   useEffect(() => {
//     async function prepare() {
  //       await new Promise(resolve => setTimeout(resolve, 500))
  //       await SplashScreen.hideAsync()
//     }
//     prepare()
//   }, [])

//   return (
//     <SafeAreaProvider>
//       <StatusBar style="dark" />
//       <Stack screenOptions={{ headerShown: false }} />
//     </SafeAreaProvider>
//   )
// }

//TUTO YOUTUBE

// import { Tabs } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Tabs>
//       <Tabs.Screen
//       name="index"
//       options={{
//         title: 'My Home',
//         tabBarLabel: 'Home',
//         }}
//       />
//       <Tabs.Screen name="profile" options={{ title: 'My Profile', tabBarLabel: 'Profile' }} />
//     </Tabs>
//   )
// }

import 'react-native-url-polyfill/auto'
import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState } from "react"
import { Asset } from "expo-asset"

// Empêche le splash screen de se cacher automatiquement
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Précharge les images
        await Asset.loadAsync([
          require("../assets/images/logo_ipps.png"),
          // Ajoutez d'autres images si nécessaire
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
      // Cache le splash screen quand tout est prêt
      SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null // Affiche le splash screen pendant le chargement
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(admin)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="register-otp" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  )
}