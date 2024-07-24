import { StyleSheet } from 'react-native'

export default  styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20, // Üstteki boşluk
        backgroundColor: '#fff',
      },
      loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      errorText: {
        fontSize: 18,
        color: 'red',
      },
      flatListContent: {
        paddingBottom: 20, // Alttaki boşluk
      },
      card: {
        padding: 10,
        height: 160, // Sabit yükseklik
      },
      cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
      },
      checkbox: {
        marginRight: 10,
      },
      imageContainer: {
        borderWidth: 0.5,
        borderColor: 'gray',
        padding: 5,
        marginRight: 10,
        alignItems: 'center',
        borderRadius:10
      },
      image: {
        width: 75,
        height: 75,
        marginBottom: 5,
      },
      info: {
        flex: 1,
        justifyContent: 'space-between',
        height: '100%',
      },
      title: {
        fontSize: 14,
        fontWeight: 'bold',
        //paddingTop:5
      },
      quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#000',
        padding: 5,
      },
      quantityButton: {
        fontSize: 22,
        paddingHorizontal: 10,
        color:'orange'
      },
      quantityText: {
        fontSize: 16,
        paddingHorizontal: 10, 
      },
      price: {
        fontSize: 14,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 10,
        right: 10,
      },
  });