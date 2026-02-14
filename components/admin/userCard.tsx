import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface UserCardProps {
  user: {
    id: string
    name: string
    role?: string
    roleColor?: string
    roles?: string[]
    roleColors?: string[]
  }
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        
        <View style={styles.rolesContainer}>
          {user.role && (
            <View style={[styles.roleBadge, { backgroundColor: user.roleColor }]}>
              <Text style={styles.roleText}>{user.role}</Text>
            </View>
          )}
          
          {user.roles && user.roles.map((role, index) => (
            <View 
              key={index} 
              style={[styles.roleBadge, { backgroundColor: user.roleColors?.[index] }]}
            >
              <Text style={styles.roleText}>{role}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="ellipsis-vertical" size={20} color="#999" />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
  },

  content: {
    flex: 1,
    gap: 8,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },

  rolesContainer: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
  },

  roleBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },

  roleText: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
  },

  menuButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  }
})

// import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
// import { Ionicons } from "@expo/vector-icons"

// interface UserCardProps {
//   user: {
//     id: string
//     name: string
//     role?: string
//     roleColor?: string
//     roles?: string[]
//     roleColors?: string[]
//   }
// }

// export default function UserCard({ user }: UserCardProps) {
//   return (
//     <TouchableOpacity style={styles.card}>
//       <View style={styles.content}>
//         <Text style={styles.name}>{user.name}</Text>
        
//         <View style={styles.rolesContainer}>
//           {user.role ? (
//             <View style={[styles.roleBadge, { backgroundColor: user.roleColor }]}>
//               <Text style={styles.roleText}>{user.role}</Text>
//             </View>
//           ) : (
//             user.roles?.map((role, index) => (
//               <View 
//                 key={index} 
//                 style={[styles.roleBadge, { backgroundColor: user.roleColors?.[index] }]}
//               >
//                 <Text style={styles.roleText}>{role}</Text>
//               </View>
//             ))
//           )}
//         </View>
//       </View>

//       <TouchableOpacity style={styles.menuButton}>
//         <Ionicons name="ellipsis-vertical" size={20} color="#999" />
//       </TouchableOpacity>
//     </TouchableOpacity>
//   )
// }

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "white",
//     borderRadius: 14,
//     padding: 16,
//   },

//   content: {
//     flex: 1,
//     gap: 8,
//   },

//   name: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },

//   rolesContainer: {
//     flexDirection: "row",
//     gap: 8,
//     flexWrap: "wrap",
//   },

//   roleBadge: {
//     paddingHorizontal: 12,
//     paddingVertical: 4,
//     borderRadius: 12,
//   },

//   roleText: {
//     color: "white",
//     fontSize: 11,
//     fontWeight: "600",
//   },

//   menuButton: {
//     width: 32,
//     height: 32,
//     justifyContent: "center",
//     alignItems: "center",
//   }
// })
// ```

// ---

// ## ✅ **Récapitulatif des fichiers créés :**
// ```
// // ✅ app/(admin)/messages.tsx
// // ✅ app/(admin)/users.tsx
// // ✅ components/admin/messageHeader.tsx
// // ✅ components/admin/messageCard.tsx
// // ✅ components/admin/userHeader.tsx
// // ✅ components/admin/userCard.tsx