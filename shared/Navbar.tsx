import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
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

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navLinks}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('/Products')}>
          <Text style={styles.navText}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/AddProductsScreen')}>
          <Text style={styles.navText}>Add Parts</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('/Support')}>
          <Text style={styles.navText}>Support</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}