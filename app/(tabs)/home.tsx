import { View, Text, TouchableOpacity } from "react-native";
import { auth } from "../../config";
import { router } from "expo-router";

export default function Home () {
  const signOut = () => {
    try {
      auth.signOut()
    } catch (error) {
      alert(error)
    }
    router.replace('/login')
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={signOut}>
        <Text>Deslogar</Text>
      </TouchableOpacity>
    </View>
  )
}