import { Tabs } from "expo-router"
import { Ionicons } from "@expo/vector-icons"
import { Platform, View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSafeAreaInsets } from "react-native-safe-area-context"

export default function BikamoiLayout() {
  const insets = useSafeAreaInsets();
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#EBE6DC" }} edges={['top', 'left', 'right']}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: Platform.OS === "ios",
          tabBarShowLabel: false,

          tabBarStyle: {
            position: "absolute",
            bottom: insets.bottom > 0 ? insets.bottom + 5 : 20,  // 🔑 S'adapte au notch
            marginLeft: 60,
            marginRight: -40,

            
            height: 85,
            maxWidth: 305,         // 🔑 Largeur max pour tablettes
            alignSelf: 'center',   // 🔑 Toujours centré
            
            backgroundColor: "#fff",
            borderRadius: 100,
            
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 5 },
            elevation: 5,
            
            paddingVertical: 8,
            paddingHorizontal: 10,
            
            // 🔑 Flexbox pour espacer uniformément
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          },
        }}
      >
        <Tabs.Screen
          name="bikamoi_dashboard"
          options={{ 
            tabBarIcon: ({ focused }) => (
              <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
                <Ionicons
                  name="home-outline"
                  size={45}
                  color={focused ? "#C5A045" : "#000"}
                />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="bikamoi_message"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
                <Ionicons
                  name="chatbubble-outline"
                  size={45}
                  color={focused ? "#C5A045" : "#000"}
                />
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="bikamoi_profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={[styles.iconContainer, focused && styles.iconContainerActive]}>
                <Ionicons
                  name="person-outline"
                  size={45}
                  color={focused ? "#C5A045" : "#000"}
                />
              </View>
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainerActive: {
    backgroundColor: "#c5a14579",
  },
})