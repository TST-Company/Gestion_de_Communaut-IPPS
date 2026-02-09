import { TouchableOpacity, Text } from "react-native"

export default function PrimaryButton({
  title,
  onPress,
  variant = "primary"
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: variant === "primary" ? "#C9A44C" : "#FFF",
        borderRadius: 30,
        padding: 14,
        marginVertical: 8,
        // borderWidth: variant === "secondary" ? 1 : 0
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 23, fontWeight: "bold", color: variant === "primary" ? "#FFF" : "#C9A44C" }}>{title}</Text>
    </TouchableOpacity>
  )
}
