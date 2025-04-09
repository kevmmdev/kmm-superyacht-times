import * as SecureStore from 'expo-secure-store';

export enum SecureStorageKeys {
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
}

export const secureStorage = {
  async setItem(key: SecureStorageKeys, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error(`SecureStore: Failed to set ${key}`, error);
    }
  },

  async getItem(key: SecureStorageKeys): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error(`SecureStore: Failed to get ${key}`, error);
      return null;
    }
  },

  async deleteItem(key: SecureStorageKeys): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error(`SecureStore: Failed to delete ${key}`, error);
    }
  },
};
