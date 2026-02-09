// import { router } from "react";
// import { Button, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { useState } from "react"

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
    Button,
    ScrollView
} from "react-native"

export default function registerOtp() {
    const router = useRouter()
    const [phone, setPhone] =  useState("")
    return(
        // <ScrollView style={styles.page}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#fff", borderRadius: 15, justifyContent: "center" }} style={styles.page}>        
              <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} />
                  </TouchableOpacity>

                <Text style={styles.title}>Inscription</Text>                  
                                
                </View>
                <Text style={styles.titlecodeV}>Code de vérification</Text>  
                  <Text style={styles.section}>Entrez le code reçu au +221 77 723 77 20</Text>
                  
                {/* Code OTP */}
                <Text style={styles.titleOtp}>Code OTP</Text>
                <View style={styles.input}>
                  <Ionicons name="call-outline" size={20} />
                  <TextInput
                    placeholder="code OTP"
                    keyboardType="phone-pad"
                    style={styles.inputText}
                    value={phone}
                    onChangeText={setPhone}
                    placeholderTextColor="#999"
                  />
                </View>
        
                {/* Button */}
                {/* <TouchableOpacity style={styles.mainButton}>
                  <Text style={styles.mainButtonText}>Recevoir le code</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                style={styles.mainButton}
                onPress={() => router.push("/register-success")}
                >
                    <Text style={styles.mainButtonText}>S'inscrire</Text>

                </TouchableOpacity>

                 <Button
                    title="Test Admin"
                    onPress={() => router.replace("/admin/dashboard")}
                  />                
              </View>
        </ScrollView>
    )    
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ECE8D8",
    // justifyContent: "center",
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
  titlecodeV: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 22,
    padding: 12
  },

  section: {
    marginTop: 10,
    marginBottom: 8,
    // fontWeight: "600"
    fontSize: 16
  },
  titleOtp: {
    fontSize: 18,
    marginTop: 12,
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
    padding: 0,           // ← Important
    margin: 0,            // ← Important
    backgroundColor: "transparent",
    // @ts-ignore - outline est pour le web,
    // outlineStyle: "none",
      ...({ outlineStyle: "none" } as any)

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