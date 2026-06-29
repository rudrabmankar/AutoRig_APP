import React, { useEffect, useState } from 'react';
import { Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Navbar from '../../shared/Navbar';
import { styles } from '../../shared/styles';
import { supabase } from '../../shared/supabase';

export default function ProductsScreen() {
  const [products, setProducts] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchProducts() {
    // Fetching from the "products" table
    const { data, error } = await supabase.from("products").select("*");
    if (data) setProducts(data);
    if (error) console.error("Error fetching products:", error);
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchProducts().then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <View style={styles.page}>
      <Navbar />
      <ScrollView 
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="red" />}
      >
        <Text style={styles.title}>All Products</Text>
        
        <View style={styles.cardContainer}>
          {products.map((product, index) => (
            <View style={styles.card} key={index}>
              <Image source={{ uri: product.image_url }} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{product.name}</Text>
              <Text style={styles.price}>{product.price}</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy Now</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}