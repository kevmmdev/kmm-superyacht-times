import { Tabs } from 'expo-router';

export default function YachtDetailLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="map" options={{ title: 'Map' }} />
      <Tabs.Screen name="positions" options={{ title: 'Positions' }} />
      <Tabs.Screen name="details" options={{ title: 'Details' }} />
    </Tabs>
  );
}

{/* <Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
  }}
/> */}