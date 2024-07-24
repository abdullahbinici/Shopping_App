import { StyleSheet } from 'react-native'
import React from 'react'

export default StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
      },
      clearButton: {
        fontSize: 14,
        color: 'gray',
      },
      title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight:'bold',
        // textAlign: 'left', // Başlığı sola yaslamak için
      },
      categoryItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      selectedCategory: {
        backgroundColor: '#ddd',
      },
      categoryText: {
        fontSize: 18,
        textAlign: 'center',
        textAlign: 'left', // Başlığı sola yaslamak için
      },
});