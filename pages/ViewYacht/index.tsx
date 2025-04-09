import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Marker, LongPressEvent } from 'react-native-maps';
import * as Location from 'expo-location';


// TODO: There’s currently no geolocation or position data in the yacht data from the api.
export default function MapScreen() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const initializeLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'We need location permission to show your position.');
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }

    initializeLocation();
  }, []);

  const handleLongPress = (event: LongPressEvent) => {
    const { coordinate } = event.nativeEvent;
    setLocation({
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
    });
  };

  if (!location) return null;

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        onLongPress={handleLongPress}
      >
        <Marker coordinate={location} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
