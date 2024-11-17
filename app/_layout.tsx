import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Slot, Stack, useRouter, useSegments } from 'expo-router';
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
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { ActivityIndicator } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export function InitialLayout() {
  // Check if the user is authenticated and the app is initialized.
  const { token, initialized } = useAuth();
  // Get the router instance and the current route segments.
  const router = useRouter();
  const segments = useSegments();
  // Load the custom fonts and the FontAwesome icon set.
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // Hide the splash screen when the app is ready.
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Redirect to the correct route based on the user's authentication status.
  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === '(authenticated)';

    if (token && !inAuthGroup) {
      router.replace('/(authenticated)/(drawer)/(tabs)');
    } else if (!token && inAuthGroup) {
      router.replace('/home');
    }
  }, [token, initialized]);

  if (!loaded || !initialized) {
    return <ActivityIndicator size={'large'} />;
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
            name='home'
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
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
