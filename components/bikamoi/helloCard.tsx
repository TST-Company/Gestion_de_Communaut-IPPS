import { View, Text, StyleSheet } from "react-native";

export default function HelloCard() {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Bonjour !</Text>
      <Text style={styles.message}>
        Heureux de vous accueillir dans votre espace lecteur.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#C5A045", // couleur dorée
    borderRadius: 16,           // arrondi plus prononcé
    padding: 20,                // plus d'espace interne
    marginTop: 25,
    shadowColor: "#C5A045", // iOS
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  title: {
    color: "#fff",
    fontSize: 20,               // légèrement plus grand
    fontWeight: "700",          // plus gras
    marginBottom: 10,            // espace entre titre et message
  },
  message: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 20,             // lisibilité
  },
});