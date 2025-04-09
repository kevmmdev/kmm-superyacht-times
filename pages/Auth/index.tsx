import { AppButton } from "@/components/AppButton";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useAuthSession } from "./useAuthSession";
import { ActivityIndicator } from "react-native-paper";

WebBrowser.maybeCompleteAuthSession();

export const AuthScreen = () => {
  const { isLoading, promptLogin } = useAuthSession();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to SuperYacht Times</Text>
      <AppButton
        onPress={promptLogin}
        icon={isLoading ? ActivityIndicator : undefined}
        disabled={isLoading}
      >
        Login
      </AppButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    margin: 5,
  },
  welcomeText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  },
});
