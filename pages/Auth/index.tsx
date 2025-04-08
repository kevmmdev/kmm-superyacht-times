import { AppButton } from "@/components/AppButton"
import { AppTextInput } from "@/components/AppTextInput"
import { StyleSheet, SafeAreaView, Text } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 10,
    margin: 5,
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    padding: 5
  }
})

export const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to SuperYacht Times</Text>
      <AppTextInput label={'Email'} />
      <AppTextInput label={'Password'} />
      <AppButton>Login</AppButton> 
    </SafeAreaView>
  )
}