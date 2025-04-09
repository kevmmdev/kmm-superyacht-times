import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

/**
 TODO

Screens
  X - LoginScreen
    - auth form
        - login button
  YachtSearchScreen
   X - home screen
    - list of the search results
   X - search bar
    - search api
  YachtDetailScreen
    - map
    - list of past positions
    - optional: yacht details, etc
    functionalities:
      addPosition
        - plus button which opens another modal
        - show map with a pin defaulting to users current phone location
        - long pressing map should move the pin/marker to the pressed location
        - form fields (select date, time and note max 140 chars)
        - create button, new position selected on the map should be added via the Position API ???
        - after adding, user is redirected back to yacht detail screen, which should refresh and show the added position

Tools to use:
  - TanStack
  - axios
  - react native paper
  - react-native-maps

  nice to haves
  - add prettier and linter
  - add tests (optional)
  - localization

  Last part: 
    Apply optimizations etc useMemo, useCallBack. For now avoiding premature optimizations
    Remove tabs
 */

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          display: 'none'
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
