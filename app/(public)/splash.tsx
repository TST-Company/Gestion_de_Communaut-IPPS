import { View, Image, StyleSheet, Animated } from "react-native"
import { useEffect, useRef } from "react"
import { useRouter } from "expo-router"

export default function Splash() {
  const router = useRouter()

  const opacity = useRef(new Animated.Value(0)).current
  const scale = useRef(new Animated.Value(0.8)).current

  useEffect(() => {
    // Animation d’entrée
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true
      })
    ]).start()

    // Animation de sortie + redirection
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 900,
        useNativeDriver: true
      }).start(() => {
        router.replace("/")
      })
    }, 3000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/splash-logo.png")}
        style={[
          styles.logo,
          {
            opacity,
            transform: [{ scale }]
          }
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9A44C",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain"
  }
})
