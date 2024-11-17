import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import Colors from '@/constants/Colors';

export default function DrawLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          drawerActiveBackgroundColor: Colors.primary,
          drawerActiveTintColor: '#fff',
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
        <Drawer.Screen
          name='(tabs)'
          options={{
            headerShown: false,
            drawerLabel: 'Home',
          }}
        />
        <Drawer.Screen name='settings' />
      </Drawer>
    </GestureHandlerRootView>
  );
}
