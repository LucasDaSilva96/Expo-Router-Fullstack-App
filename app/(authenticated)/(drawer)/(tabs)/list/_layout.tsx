import React from 'react';
import { Stack } from 'expo-router';
import Colors from '@/constants/Colors';

export default function ListLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name='index' options={{ title: 'List' }} />
    </Stack>
  );
}
