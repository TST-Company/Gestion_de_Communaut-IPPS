import { ScrollView, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AdminHeader from "@/components/admin/adminHeader"
import StatsGrid from "@/components/admin/statsGrid"
import QuickActions from "@/components/admin/quickActions"
import { Text } from "react-native"

export default function AdminDashboard() {
  return (
    // <SafeAreaView style={styles.page} edges={['top', 'left', 'right']}>
    <ScrollView 
          style={styles.page}
          // edges={['top', 'left', 'right']}
          // contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
        <AdminHeader />
        <StatsGrid />

        <Text style={styles.section}>Actions rapides</Text>
        <QuickActions />
    </ScrollView>
    //  </SafeAreaView>
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
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 24,
  }
})


// import { StyleSheet, ScrollView, Text } from "react-native"
// import AdminHeader from "@/components/admin/adminHeader"
// import StatsGrid from "@/components/admin/statsGrid"
// import QuickActions from "@/components/admin/quickActions"

// export default function AdminDashboard() {
//   return (
//     <ScrollView 
//       style={styles.page}
//       contentContainerStyle={styles.content}
//       showsVerticalScrollIndicator={false}
//     >
//       {/* ❌ Pas de SafeAreaView ici, c'est déjà géré dans _layout.tsx */}
      
//       <AdminHeader />
//       <StatsGrid />

//       <Text style={styles.section}>Actions rapides</Text>
//       <QuickActions />
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: "#ECE8D8",
//   },

//   content: {
//     padding: 16,
//     paddingBottom: 20,
//   },

//   section: {
//     marginTop: 20,
//     fontWeight: "bold",
//     fontSize: 24,
//   }
// })