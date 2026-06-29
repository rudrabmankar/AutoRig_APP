import React from 'react';
import { Text, View } from 'react-native';
import Navbar from '../../shared/Navbar';
import { styles } from '../../shared/styles';

export default function SupportScreen() {
  return (
    <View style={styles.page}>
      <Navbar />
      <View style={styles.supportContainer}>
        <Text style={styles.title}>Contact & Support</Text>
        <Text style={styles.supportText}>Email: support@autorig.com</Text>
        <Text style={styles.supportText}>Phone: +91 9876543210</Text>
      </View>
    </View>
  );
}