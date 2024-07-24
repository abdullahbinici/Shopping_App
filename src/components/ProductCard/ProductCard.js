import { Text, View, Image, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './ProductCard.style'
import { Ionicons } from '@expo/vector-icons'; 

const ProductCard = ({ product, onSelect, onAddToCart }) => {

    const handleAddToCart = async () => {
        await onAddToCart(product);
    };

    return (
        <View style={styles.cardContainer}>
        <TouchableWithoutFeedback onPress={onSelect}>
          <View style={styles.card}>
            <Image style={styles.image} source={{ uri: product.image }} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.price}>{product.price} TL</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={handleAddToCart}>
          <View style={styles.addToCartButton}>
            <Ionicons name="cart" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.addToCartButtonText}>Sepete Ekle</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}

export default ProductCard;
