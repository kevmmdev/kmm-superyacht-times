import { View, Text, ListRenderItem, StyleSheet, Image } from 'react-native';
import React from 'react';
import { YachtLike } from '@/api/yachtLike/types';


type YachtItemProps = ListRenderItem<YachtLike>

export const YachtItem: YachtItemProps = ({ item }) => {
  const {
    name,
    build_year,
    flag,
    type,
    length_overall,
    guest_count,
    photos,
  } = item;

  const primaryPhoto = photos?.find((photo) => photo.primary);

  return (
    <View style={styles.container}>
      {primaryPhoto ? (
        <Image
          source={{
            uri: `https://photos.superyachtapi.com/download/${primaryPhoto.id}/medium`,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]}>
          <Text style={styles.imagePlaceholderText}>No Image</Text>
        </View>
      )}

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.subInfo}>
          {build_year ? `Built ${build_year}` : 'Year unknown'} • {flag || 'Unknown flag'}
        </Text>
        <Text style={styles.meta}>
          {type?.toUpperCase()} • {length_overall}m • {guest_count ?? 0} guests
        </Text>
      </View>
    </View>
  );
};


export default YachtItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  imagePlaceholder: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholderText: {
    color: '#888',
    fontStyle: 'italic',
  },
  infoContainer: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  subInfo: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  meta: {
    fontSize: 14,
    color: '#444',
    marginTop: 4,
  },
});