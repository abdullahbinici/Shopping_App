import { Text, View, FlatList, ActivityIndicator, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';

import ProductCard from '../../../components/ProductCard/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

import useFetch from '../../../hooks/useFetch';
// import { container } from '../../core/di/container';

import styles from './Products.style'
import { Ionicons } from '@expo/vector-icons'; // Çarpı ikonu için

import { CardModel } from '../../../repositories/card/model/CardModel';
import { CardRepository } from '../../../repositories/card/business/CartRepository';
import { CartContext } from '../../../context/CartContext'; 
import FilterModal from '../../../components/Modal/Filter/FilterModal'; 
import SortModal from '../../../components/Modal/Sort/SortModal';


const cardRepository = new CardRepository();

 const Products = ({navigation}) => {
    const {error, loading, data} = useFetch(); 
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const { cartCount, setCartCount } = useContext(CartContext);
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isSortModalVisible, setSortModalVisible] = useState(false);
    //const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const fetchCartCount = async () => {
            const cartItems = await cardRepository.getAllCard();
            console.log('card items' + {cartItems});
            setCartCount(cartItems.reduce((total, item) => total + (item.totalNumberOfCards || 0), 0));
        };
        fetchCartCount();
    }, []);
    
    const handleProductSelect = (product) =>{
        navigation.navigate('Detail',{product});
    };

    const handleAddToCart = async (product) => {
        const cardModel = new CardModel(product.id, product.title, product.category, product.price, product.image);
        await cardRepository.addCard(cardModel);
        const cartItems = await cardRepository.getAllCard();
        setCartCount(cartItems.reduce((total, item) => total + (item.totalNumberOfCards || 0), 0));
    };

    const renderProduct = ({ item }) => (
        <ProductCard product={item} onSelect={() => handleProductSelect(item)} onAddToCart={handleAddToCart}/>
    );

    useEffect(() => {
      if (data) {
        setFilteredData(data);
      }
    }, [data]);
  
    useEffect(() => {
      if (selectedCategory) {
        const newData = data.filter(item => item.category === selectedCategory);
        setFilteredData(newData);
      } else {
        setFilteredData(data);
      }
    }, [selectedCategory, data]);
  
    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text) {
          const newData = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
          setFilteredData(newData);
        } else {
          setFilteredData(data);
        }
      };

      // const handlePress = () => {
      //   setModalVisible(true);
      // };

      const handlePressSort = () => {
        setSortModalVisible(true);
      };

      const clearSearch = () => {
        setSearchQuery('');
        setFilteredData(data);
      };


      const handleCategorySelect = (category) => {
        console.log("Selected Category: ", category);
        setModalVisible(false);
        setSelectedCategory(category);
      };

      const handlePressFilter = () => {
        setModalVisible(true);
      };
    
      const handleSortOptionSelect = (option) => {
        console.log("Selected Sort Option: ", option);
        if (option === 'lowToHigh') {
          const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
          setFilteredData(sortedData);
        } else if (option === 'highToLow') {
          const sortedData = [...filteredData].sort((a, b) => b.price - a.price);
          setFilteredData(sortedData);
        }
      };

    if(error){
        return <Text>{error}</Text>
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Ürün Ara..."
              value={searchQuery}
              onChangeText={handleSearch}
            />
            {searchQuery ? (
              <TouchableOpacity onPress={clearSearch} style={styles.clearIcon}>
                <Ionicons name="close-circle" size={24} color="gray" />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handlePressFilter}>
              <Ionicons name="filter" size={20} color="white" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Filtrele</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handlePressSort}>
              <Ionicons name="swap-vertical" size={20} color="white" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Sırala</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size={"large"} /> // Veri yüklenirken gösterilecek mesaj
          ) : (
            <FlatList
              data={filteredData}
              renderItem={renderProduct}
              numColumns={2}
            />
          )}
        </View>
        <FilterModal
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
          onSelectCategory={handleCategorySelect}
        />
              <SortModal
        isVisible={isSortModalVisible}
        onClose={() => setSortModalVisible(false)}
        onSelectSortOption={handleSortOptionSelect}
      />
      </SafeAreaView>
    );
  };
  

export default Products;
