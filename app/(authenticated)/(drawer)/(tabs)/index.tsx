import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

export default function TabsHomePage() {
  const [input, setInput] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const onGenerateImage = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });
      const image = await response.json();

      setImage(image || '');
      setLoading(false);
      setInput('');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder='Santa on the beach'
        editable={!loading}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onGenerateImage}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Generate image</Text>
      </TouchableOpacity>
      {loading && (
        <ActivityIndicator style={{ marginTop: 20 }} size={'large'} />
      )}
      {image && (
        <Image
          style={{ width: '100%', height: 300, marginTop: 20 }}
          source={{ uri: image }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#18191a',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
