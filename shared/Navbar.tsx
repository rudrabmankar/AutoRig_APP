import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function Navbar() {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => router.push('/')}>
        {/* Replaced local image with text logo to prevent asset errors */}
        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', fontStyle: 'italic' }}>
          AutoRig
        </Text>
      </TouchableOpacity>
    </View>
  );
}