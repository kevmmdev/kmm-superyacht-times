import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function YachtPositionsScreen() {
  const { yacht } = useLocalSearchParams();
  const yachtData = yacht ? JSON.parse(yacht as string) : null;

  return (
    <View style={styles.container}>
      <Text>📜 Historical positions for {yachtData?.name}</Text>
      {/* TODO: List actual past positions from mock or future API */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
