import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';
import { CardRepository } from '../../repositories/card/business/CartRepository';
import cartHook from '../../hooks/cart/cartHook';
import styles from './CartScreen.style'
import { CardModel } from '../../repositories/card/model/CardModel';
import { useFocusEffect } from '@react-navigation/native';

const cardRepository = new CardRepository();

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const { error, loading, data, refetch } = cartHook();
  const cardRepository = new CardRepository();

  useEffect(() => {
    if (data) {
      setCartItems(data);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );

  const incrementItem = async (id) => {
    const updatedItems = cartItems.map(item =>
      item.product_Id === id ? { ...item, totalNumberOfCards: item.totalNumberOfCards + 1 } : item
    );
    const item = updatedItems.find(item => item.product_Id === id);
    if (item) {
      const cardModel = new CardModel(item.product_Id, item.title, item.category, item.price, item.image);
      await cardRepository.addCard(cardModel);
      // setCartItems(updatedItems.filter(item => item.product_Id !== id));
      await refetch(); // Verileri yeniden çek
    } else {
      setCartItems(updatedItems);
    }   
  };

  const decrementItem = async (id) => {
    const updatedItems = cartItems.map(item =>
      item.product_Id === id ? { ...item, totalNumberOfCards: item.totalNumberOfCards - 1 } : item
    );

    const item = updatedItems.find(item => item.product_Id === id);
    if (item) {
      await cardRepository.deleteOneByProductId(item.id);
      // setCartItems(updatedItems.filter(item => item.product_Id !== id));
      await refetch(); // Verileri yeniden çek
    } else {
      setCartItems(updatedItems);
    }
  };  

  const toggleSelectItem = (id) => {
    setCartItems(cartItems.map(item =>
      item.product_Id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Checkbox
          status={item.selected ? 'checked' : 'unchecked'}
          onPress={() => toggleSelectItem(item.product_Id)}
          color={'orange'} // Rengi değiştirmek için
          style={styles.checkbox}
        />
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => decrementItem(item.product_Id)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.totalNumberOfCards}</Text>
            <TouchableOpacity onPress={() => incrementItem(item.product_Id)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.product_Id.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default CartScreen;