import { Ionicons } from '@expo/vector-icons';
import { router, Tabs } from 'expo-router';
import { Pressable, Text } from 'react-native';

const HeaderLeft = () => {
  return (
    <Pressable
      onPress={() => router.push('/')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
      }}
    >
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={{ marginLeft: 6, fontSize: 16 }}>Back</Text>
    </Pressable>
  )
}

export default function YachtDetailLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: HeaderLeft,
      }}
    >
    <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="positions"
        options={{
          title: 'Positions',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: 'Details',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}