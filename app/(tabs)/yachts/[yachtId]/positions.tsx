import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';

type Position = {
  timestamp: string;
  latitude: number;
  longitude: number;
};

export default function YachtPositionsScreen() {
  const { yacht } = useGlobalSearchParams();
  const yachtData = yacht ? JSON.parse(yacht as string) : null;

  if (!yachtData) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Missing or invalid yacht data.</Text>
      </View>
    );
  }

  // 🔧 Replace this with live data later
  const mockPositions: Position[] = [
    {
      timestamp: '2024-04-01T10:00:00Z',
      latitude: 14.5995,
      longitude: 120.9842,
    },
    {
      timestamp: '2024-03-25T16:30:00Z',
      latitude: 15.3173,
      longitude: 121.2244,
    },
    {
      timestamp: '2024-03-10T08:45:00Z',
      latitude: 13.7563,
      longitude: 121.0583,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Historical Positions</Text>
      <Text style={styles.subtitle}>Yacht: {yachtData.name || 'Unnamed'}</Text>

      <FlatList
        data={mockPositions}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.label}>Time:</Text>
            <Text style={styles.value}>{new Date(item.timestamp).toLocaleString()}</Text>
            <Text style={styles.label}>Coordinates:</Text>
            <Text style={styles.value}>
              {item.latitude.toFixed(4)}, {item.longitude.toFixed(4)}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No position data available.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  list: {
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginTop: 6,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 32,
  },
});
