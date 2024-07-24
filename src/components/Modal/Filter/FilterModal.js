import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import styles from './FilterModal.style'

const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

const FilterModal = ({ isVisible, onClose, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
    onClose();
  };

  const handleNoneSelect = () => {
    setSelectedCategory(null);
    onSelectCategory(null);
    onClose();
  };
  

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.modal}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
    >
      <View style={styles.modalContent}>
      <View style={styles.header}>
          <Text style={styles.title}>Kategori seçiniz</Text>
          <TouchableOpacity onPress={handleNoneSelect}>
            <Text style={styles.clearButton}>Temizle</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryItem,
                selectedCategory === item && styles.selectedCategory,
              ]}
              onPress={() => handleCategorySelect(item)}
            >
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
};

export default FilterModal;
