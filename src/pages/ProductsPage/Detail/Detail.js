import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './Detail.style'

const Detail = ({route}) => {
    const { product } = route.params; // 'route.params' ile gönderilen ürünü alın
  return (
      <View style = {styles.container}>
        <Image source={{uri: product.image}} style = {styles.image}/>
        <View style = {styles.body_container}>
        <Text style = {styles.title}>{product.title}</Text>
        <Text style = {styles.desc}>{product.description}</Text>
        <Text style = {styles.price}>{product.price} TL</Text>
        </View>
      </View>
  )
}

export default Detail;