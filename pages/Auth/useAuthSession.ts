import { AppButton } from "@/components/AppButton"
import { AppTextInput } from "@/components/AppTextInput"
import { StyleSheet, SafeAreaView, Text, Alert, View } from "react-native"
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useEffect, useState } from "react";
import { secureStorage, SecureStorageKeys } from "@/services/storage";

WebBrowser.maybeCompleteAuthSession();
//43qvtQBVZqcrytmwasLL-FqaJN438GZALoDkua4mlL8
const CLIENT_ID = 'MsdFcFDwweoUf5XgIKIApO6VZgkQ6omLujLV7f3zM5o';
const REDIRECT_URI = 'exp://127.0.0.1:8081';

const ENDPOINTS = {
  authorizationEndpoint: 'https://www.superyachttimes.com/oauth/authorize',
  tokenEndpoint: 'https://www.superyachttimes.com/oauth/token',
  revocationEndpoint: 'https://www.superyachttimes.com/oauth/revoke',
};
export const useAuthSession = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: REDIRECT_URI,
      responseType: AuthSession.ResponseType.Code,
      usePKCE: true,
      scopes: ['API']
    },
    ENDPOINTS
  );

  const promptLogin = async () => {
    if (!request) return;

    try {
      setIsLoading(true);
      const promptData = await promptAsync(); 
      if (promptData.type !== 'success') return;
      await getAccessToken()
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  }

  const getAccessToken = async () => {
    if (response?.type !== "success") return

    try {
      const { code } = response.params;
      const tokenResponse = await AuthSession.exchangeCodeAsync(
        {
          clientId: CLIENT_ID,
          code,
          redirectUri: REDIRECT_URI,
          extraParams: {
            code_verifier: request?.codeVerifier ?? '',
          },
        },
        ENDPOINTS
      );

      await secureStorage.setItem(SecureStorageKeys.ACCESS_TOKEN, tokenResponse.accessToken);
      await secureStorage.setItem(SecureStorageKeys.REFRESH_TOKEN, tokenResponse.accessToken);

      //route to home screen
      // Alert.alert('Login Success', `Token: ${tokenResponse.accessToken}`);
    } catch (err) {
      console.error('Token exchange failed:', err);
      Alert.alert('Login Failed', 'Could not retrieve access token.');
    }
  }

  return {
    isLoading,
    promptLogin
  }
}