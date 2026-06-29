import React, { useEffect, useState, useCallback } from 'react';import { 
  View, 
  Text, 
  TextInput, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  RefreshControl 
} from 'react-native';
import Navbar from '../../shared/Navbar';
import { styles } from '../../shared/styles';
import { supabase } from '../../shared/supabase';

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  // Define a dummy refresh function or trigger a re-fetch if needed
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Add logic here if you want to re-fetch data, otherwise just wait
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <View style={styles.page}>
      <Navbar />
      <ScrollView 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="white" />
        }
      >
        <Hero />
        <View style={styles.searchSection}>
          <Text style={styles.title}>Search Products</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Motorcycle Parts..."
            placeholderTextColor="#666"
          />
        </View>
        <FeaturedCategories />
      </ScrollView>
    </View>
  );
}

const Hero = () => (
  <View style={styles.hero}>
    <Text style={styles.heroTitle}>Welcome to AutoRig</Text>
    <Text style={styles.heroSubtitle}>Your One Stop Shop for Motorcycle Parts.</Text>
  </View>
);

const FeaturedCategories = () => {
  const [featured, setFeatured] = useState<any[]>([]);

  useEffect(() => {
    async function fetchFeatured() {
      // Fetching up to 4 items from the products table for the home screen
      const { data } = await supabase.from("products").select("*").limit(4);
      if (data) setFeatured(data);
    }
    fetchFeatured();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Featured Products</Text>
      <View style={styles.cardContainer}>
        {featured.map((item, index) => (
          <View style={styles.card} key={index}>
            <Image source={{ uri: item.image_url }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Show More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};