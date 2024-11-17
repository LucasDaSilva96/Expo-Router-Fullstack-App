import { View, Text, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function ListTabPage() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  async function loadData() {
    try {
      setLoading(true);
      const req = await fetch('/api/todos');
      const json = await req.json();
      setData(json);
      console.log(json);
    } catch (error) {
      Alert.alert('Error', 'Failed to load data');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>index</Text>
      {data &&
        data.map((item) => (
          <View key={item._id}>
            <Text>{item.task}</Text>
            <Text>{item.desc}</Text>
          </View>
        ))}
    </View>
  );
}
