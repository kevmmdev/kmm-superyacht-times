import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { YachtLike } from '@/api/yachtLike/types';

export default function YachtDetailsScreen() {
  const { yacht } = useLocalSearchParams();
  const yachtData = yacht ? (JSON.parse(yacht as string) as YachtLike) : null;

  if (!yachtData) return <Text>Missing yacht data.</Text>;

  const primaryPhoto = yachtData.photos.find((photo) => photo.primary);

  return (
    <View style={styles.container}>
      {primaryPhoto && (
        <Image
          source={{ uri: `https://photos.superyachtapi.com/download/${primaryPhoto.id}/medium` }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>{yachtData.name}</Text>
      <Text style={styles.label}>Previous Names: {yachtData.previous_names.join(', ') || 'None'}</Text>
      <Text style={styles.label}>Builder: {yachtData.primary_build_phase?.company.name}</Text>
      <Text style={styles.label}>Build Year: {yachtData.build_year || 'Unknown'}</Text>
      <Text style={styles.label}>Length Overall: {yachtData.length_overall}m</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 16,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    marginTop: 8,
    fontSize: 16,
    color: '#444',
  },
});
