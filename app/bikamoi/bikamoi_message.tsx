import { StyleSheet, ScrollView, View } from "react-native"
import BikamoiMessageHeader from "@/components/bikamoi/bikamoimessageHeader"
import BikamoiMessageCard from "@/components/bikamoi/bikamoimessageCard"

// Données de test (remplacez plus tard par votre API)
const MOCK_MESSAGES = [
  {
    id: "1",
    type: "whatsapp",
    title: "Réunion communautaire ce soir à 20h.",
    recipients: "120 destinataires",
    time: "Aujourd'hui 16:30",
    status: "sent"
  },
  {
    id: "2",
    type: "sms",
    title: "Rappel : Cotisation annuelle.",
    recipients: "45 destinataires",
    time: "Hier 14:30",
    status: "sent"
  },
  {
    id: "3",
    type: "whatsapp",
    title: "Bienvenue aux nouveaux membres !",
    recipients: "12 destinataires",
    time: "Lundi 08:00",
    status: "draft"
  },
  {
    id: "4",
    type: "sms",
    title: "Rappel : Cotisation annuelle.",
    time: "01/01/2025 14:06",
    recipients: "45 destinataires",
    status: "sent"
  },
  {
    id: "5",
    type: "whatsapp",
    title: "Bienvenue aux nouveaux membres !",
    recipients: "12 destinataires",
    time: "01/01/2025 09:00",
    status: "draft"
  },
]

export default function bikamoiMessagesScreen() {
    return (
            <ScrollView 
          style={styles.page}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <BikamoiMessageHeader />
          
          <View style={styles.messagesList}>
            {MOCK_MESSAGES.map((message) => (
              <BikamoiMessageCard key={message.id} message={message} />
            ))}
          </View>
        </ScrollView>
      )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#ECE8D8",
    paddingBottom: 0, // Important : pas de padding bottom
  },

  content: {
    padding: 16,
    paddingBottom: 20,
  },

  messagesList: {
    marginTop: 16,
    gap: 12,
  }
})