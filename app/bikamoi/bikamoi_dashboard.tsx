import { ScrollView, StyleSheet, View } from "react-native"
import BikamoiHeader from "@/components/bikamoi/bikamoiHeader"
import HelloCard from "@/components/bikamoi/helloCard"
import InfoCard from "@/components/bikamoi/infoCard"
import StatutCard from "@/components/bikamoi/statutCard"
import { Text } from "react-native"



export default function BikamoiDashboard() {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
        <BikamoiHeader />
        <HelloCard />
        <InfoCard />

        <Text style={styles.section}>Statut du compte</Text>

        <ScrollView style={styles.container}>
          <StatutCard 
            label="État" 
            value="Actif" 
            valueColor="#4ADE80" 
            backgroundColor="#DCFCE7" 
          />

          <StatutCard 
            label="Canal actif" 
            value="WhatsApp" 
            valueColor="#60A5FA" 
            backgroundColor="#DBEAFE" 
          />
        </ScrollView>  
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ECE8D8",
    padding: 16,
    paddingBottom: 0, 
  },

  section: {
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 5,
    fontWeight: "600",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#EBE6DC",
    padding: 3,
  },
})