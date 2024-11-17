import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import '../global.css';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function InitialLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
        <StatusBar style='light' />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.background,
            },
            headerTintColor: '#fff',
          }}
        >
          <Stack.Screen
            name='index'
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='register'
            options={{
              title: 'Create an account',
              headerBackTitle: 'Login',
            }}
          />

          <Stack.Screen
            name='privacy'
            options={{
              headerBackTitle: 'Login',
              presentation: 'modal',
            }}
          />

          <Stack.Screen
            name='(authenticated)/(drawer)'
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
}

export default function RootLayoutNav() {
  return <InitialLayout />;
}
