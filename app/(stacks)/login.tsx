import { useRouter } from "expo-router";
import { User, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { auth } from "../../config";
import { accountModel } from ".";

export default function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()


  const handleLogin = async (account: accountModel) => {
    try {
      await signInWithEmailAndPassword(auth, account.email, account.password)
    } catch (error) {
      return error
    }
    router.push('/(tabs)/home')
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='email' onChangeText={(email) => setEmail(email)} autoCapitalize='none'/>
      <TextInput placeholder='password' onChangeText={(password) => setPassword(password)}/>

      <TouchableOpacity onPress={() => handleLogin({email, password})}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
