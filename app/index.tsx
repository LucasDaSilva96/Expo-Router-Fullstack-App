import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function HomePage() {
  return (
    <View className='flex-1 bg-background h-full w-full gap-6'>
      <Image
        className='w-full h-64 rounded-md '
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1692948505067-b15de9bca527?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <View className='absolute z-10 top-0 left-0 w-full py-1'>
        <Text className='text-3xl font-semibold capitalize text-center text-slate-50/85'>
          Welcome to the future
        </Text>
      </View>

      <View className='flex-1 p-2 gap-4'>
        <Link href={'/privacy'} asChild>
          <TouchableOpacity className='bg-black py-3 rounded-md'>
            <Text className='text-center text-lg font-semibold text-slate-50'>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href={'/register'} asChild>
          <TouchableOpacity className='bg-black py-3 rounded-md'>
            <Text className='text-center text-lg font-semibold text-slate-50'>
              Register
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href={'/(authenticated)/(drawer)/(tabs)'} asChild>
          <TouchableOpacity className='bg-black py-3 rounded-md'>
            <Text className='text-center text-lg font-semibold text-slate-50'>
              Login
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
