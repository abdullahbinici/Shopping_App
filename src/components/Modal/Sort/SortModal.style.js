import { StyleSheet } from 'react-native'
import React from 'react'

export default StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 0,
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 20,
      },
      title: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight:'bold'
      },
      option: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      optionText: {
        fontSize: 18,
        textAlign: 'center',
      },
});