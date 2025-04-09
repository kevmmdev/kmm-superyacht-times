import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { YachtLike } from '@/api/yachtLike/types';

export default function YachtDetailsScreen() {
  const { yacht } = useGlobalSearchParams();
  const yachtData = yacht ? (JSON.parse(yacht as string) as YachtLike) : null;

  if (!yachtData) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Yacht data is missing or invalid.</Text>
      </View>
    );
  }

  const {
    name,
    previous_names,
    primary_build_phase,
    build_year,
    length_overall,
    photos,
  } = yachtData;

  const primaryPhoto = photos?.find((photo) => photo.primary);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {primaryPhoto ? (
        <Image
          source={{ uri: `https://photos.superyachtapi.com/download/${primaryPhoto.id}/medium` }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderText}>No Image Available</Text>
        </View>
      )}

      <Text style={styles.title}>{name || 'Unnamed Yacht'}</Text>

      <View style={styles.detailBlock}>
        <Text style={styles.label}>Previous Names</Text>
        <Text style={styles.value}>
          {previous_names?.length ? previous_names.join(', ') : 'None'}
        </Text>
      </View>

      <View style={styles.detailBlock}>
        <Text style={styles.label}>Builder</Text>
        <Text style={styles.value}>
          {primary_build_phase?.company?.name || 'Unknown'}
        </Text>
      </View>

      <View style={styles.detailBlock}>
        <Text style={styles.label}>Build Year</Text>
        <Text style={styles.value}>{build_year || 'Unknown'}</Text>
      </View>

      <View style={styles.detailBlock}>
        <Text style={styles.label}>Length Overall</Text>
        <Text style={styles.value}>
          {length_overall ? `${length_overall}m` : 'Unknown'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  placeholderText: {
    color: '#999',
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
  },
  detailBlock: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
});
