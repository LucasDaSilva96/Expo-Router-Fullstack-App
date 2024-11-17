import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function HomePage() {
  const [email, setEmail] = useState('simon@galaxies.dev');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const { onLogin } = useAuth();

  const login = async () => {
    setLoading(true);

    const result = await onLogin!(email, password);

    if (result && result.error) {
      alert(result.msg);
    }
    setLoading(false);
  };

  return (
    <View className='flex-1 bg-background h-full w-full gap-6'>
      <Image
        className='w-full h-full rounded-md '
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1692948505067-b15de9bca527?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <View className='absolute z-10 top-2 left-0 w-full py-1'>
        <Text className='text-3xl font-semibold capitalize text-center text-slate-50/85'>
          Welcome to the future
        </Text>
      </View>

      <View className='flex-1 px-4 w-full h-full gap-2 py-2 absolute z-10 inset-0 items-center justify-center'>
        <TextInput
          autoCapitalize='none'
          placeholder='john@doe.com'
          value={email}
          className='w-full p-2 rounded-md bg-slate-50/65 text-center text-black font-semibold text-xl'
          onChangeText={setEmail}
        />
        <TextInput
          className='w-full p-2 rounded-md bg-slate-50/65 text-center text-black font-semibold text-xl'
          placeholder='password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          onPress={login}
          className='p-2 bg-blue-600 rounded-sm min-w-[50%] text-center'
        >
          <Text className='text-center text-lg text-slate-50 font-semibold'>
            Sign in
          </Text>
        </TouchableOpacity>

        <Link href={'/register'} asChild>
          <TouchableOpacity className='p-2 bg-blue-600 rounded-sm min-w-[50%] text-center'>
            <Text className='text-center text-lg text-slate-50 font-semibold'>
              Create Account
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href={'/privacy'} asChild>
          <TouchableOpacity className='items-center bg-black/25 p-1 px-3 rounded-sm'>
            <Text className='text-lg text-slate-50 font-semibold'>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </Link>
      </View>

      {loading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: 'rgba(0,0,0,0.6)',
              zIndex: 100,
              justifyContent: 'center',
            },
          ]}
        >
          <ActivityIndicator color='#fff' size='large' />
        </View>
      )}
    </View>
  );
}
