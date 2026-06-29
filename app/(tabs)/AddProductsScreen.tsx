import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { supabase } from '../../shared/supabase'; // Navigate out of (tabs) and app to reach root
import Navbar from '../../shared/Navbar';
import { styles } from '../../shared/styles';

export default function AddProductsScreen() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);

  async function addProductData() {
    if (!name || !price || !imageURL) {
      Alert.alert("Missing Fields", "Please fill in all product details.");
      return;
    }

    setLoading(true);
    
    // Inserting into the "products" table based on your screenshot
    const { error } = await supabase.from("products").insert([
      { name: name, price: price, image_url: imageURL }
    ]);

    setLoading(false);

    if (error) {
      Alert.alert("Error", error.message);
    } else {
      Alert.alert("Success", "Motorbike part added successfully!");
      setName("");
      setPrice("");
      setImageURL("");
    }
  }

  return (
    <View style={styles.page}>
      <Navbar />
      <ScrollView>
        <Text style={styles.title}>Add New Product</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>Part Name:</Text>
          <TextInput 
            style={styles.input}
            placeholder="e.g. Tank Pads"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Price:</Text>
          <TextInput 
            style={styles.input}
            placeholder="e.g. 3,500"
            placeholderTextColor="#888"
            value={price}
            onChangeText={setPrice}
          />

          <Text style={styles.label}>Image URL:</Text>
          <TextInput 
            style={styles.input}
            placeholder="https://example.com/image.png"
            placeholderTextColor="#888"
            value={imageURL}
            onChangeText={setImageURL}
            autoCapitalize="none"
          />

          <TouchableOpacity 
            style={styles.submitButton} 
            onPress={addProductData}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? "Adding Part..." : "Submit Product"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}