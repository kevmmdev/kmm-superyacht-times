import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { YachtLike } from '@/api/yachtLike/types';

export default function ViewYachtScreen() {
  const { yacht } = useLocalSearchParams();
  const yachtData = yacht ? (JSON.parse(yacht as string) as YachtLike) : null;

  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Yacht ID: {yachtData?.id}</Text>
        {/* Later: fetch and show full yacht details */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
