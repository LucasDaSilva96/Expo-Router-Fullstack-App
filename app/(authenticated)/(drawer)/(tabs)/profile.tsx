import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { useEffect, useState } from 'react';

// Define the response from the hello API
interface HelloResponse {
  hello: string;
}

export default function TabsProfilePage() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetches the hello API
  async function fetchHello() {
    try {
      setLoading(true);
      const response = await fetch('/api/hello');
      const data = (await response.json()) as HelloResponse;
      setData(data.hello);
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  // Fetch the hello API on mount
  useEffect(() => {
    fetchHello();
  }, []);

  if (loading) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <View>
      <Text>profile</Text>
      {data && <Text>Hello {data}</Text>}
    </View>
  );
}
