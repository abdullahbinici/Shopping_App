import { StyleSheet } from 'react-native'

export default  styles = StyleSheet.create({
    container: {
        paddingLeft:5,
        paddingRight:5,
        //padding: 10,
        //backgroundColor: '#f8f8f8',
      },
    searchContainer: {
        padding: 5,
        //backgroundColor: '#f8f8f8',
      },
      searchInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 5,
        backgroundColor:'white'
      },
      searchInput: {
        flex: 1,
        height: 40,
      },
      searchIcon: {
        marginHorizontal: 10,
      },
      clearIcon: {
        padding: 5,
      },
      buttonContainer: {
        //backgroundColor:'red',
        flexDirection: 'row',
        //marginBottom: 10,
      },
      button: {
        flex: 1,
        height: 32,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginRight: 2.5,
        //paddingTop:10,
        flexDirection: 'row', // İkon ve metni yan yana yerleştirmek için
        borderWidth:0.5,
        borderColor:'gray',
      },
      button2: {
        flex: 1,
        height: 32,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 2.5,
        //paddingTop:10,
        flexDirection: 'row', // İkon ve metni yan yana yerleştirmek için
        borderWidth:0.5,
        borderColor:'gray',
      },
      buttonIcon: {
        marginRight: 10, // İkon ve metin arasındaki boşluk
        color:'gray',
        fontSize:15
      },
      buttonText: {
        color: 'black',
        fontSize: 14,
      },
    //   listContainer: {
    //     flex: 3,
    //     paddingHorizontal: 10,
    //   },
  });