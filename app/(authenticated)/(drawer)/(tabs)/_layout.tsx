import React from 'react';
import { Link, Tabs } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Alert } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        // This is the headerLeft button
        headerLeft: () => <DrawerToggleButton tintColor='#fff' />,
        // This is the headerRight button
        headerRight: () => (
          <Link href={'/register'} replace className='px-1' asChild>
            <Ionicons size={28} name='log-out-outline' color='white' />
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'My Home feed',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
        }}
      />

      {/* Action - Tab */}
      <Tabs.Screen
        name='action'
        options={{
          title: 'Action Tab',
          tabBarLabel: 'Action',
          tabBarIcon: ({ color }) => (
            <Ionicons name='add-outline' size={28} color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert('Action Tab', 'This feature is not yet implemented');
          },
        })}
      />
      {/*  */}
      <Tabs.Screen
        name='profile'
        options={{
          title: 'My Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='cog' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='list'
        options={{
          headerShown: false,
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name='list-outline' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
