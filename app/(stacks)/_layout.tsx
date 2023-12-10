import { Stack } from "expo-router";

export default function LayoutStack () {
  return (
    <Stack screenOptions={{ headerShown: false}}>
      <Stack.Screen name="login"/>
    </Stack>
  )
}