import { StyleSheet } from 'react-native'
import React from 'react'

export default StyleSheet.create({
    container: {
        flex: 1,
        //borderWidth: 1,
        //borderColor: '#bdbdbd',
        backgroundColor: 'white',
        margin: 2,
        //padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    body_container: {
        backgroundColor:'white',
        flex:1,
        padding:5,
        justifyContent:'space-between',
        borderRadius:10
    },
    cardContainer: {
        flex: 1,
        margin: 2,
        padding: 10,
        //borderWidth: 1,
        //borderColor: '#ccc',
        borderRadius: 10,
        backgroundColor: '#fff',
        flexDirection: 'column', // Kolon yönü
        justifyContent: 'space-between', // İçerikleri dikeyde ayırmak için
      },
      card: {
        marginBottom: 10,
      },
      image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode:'contain',
      },
      cardContent: {
        flex: 1, // İçeriğin kalan alanı kaplaması için
        justifyContent: 'space-between', // İçerikleri dikeyde ayırmak için
      },
      title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
      },
      price: {
        fontSize: 14,
        color: '#888',
        marginVertical: 5,
      },
      addToCartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#28a745',
        backgroundColor: 'orange',
        paddingVertical: 10,
        borderRadius: 5,
      },
      addToCartButtonText: {
        color: 'white',
        fontSize: 16,
      },
      buttonIcon: {
        marginRight: 5, // İkon ve metin arasındaki boşluk
      },
});