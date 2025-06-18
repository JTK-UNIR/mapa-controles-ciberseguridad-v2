import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Mapa Técnico de Controles', // 
          tabBarLabel: 'Mapa',                // 
        }}
      />
    </Tabs>
  );
}
