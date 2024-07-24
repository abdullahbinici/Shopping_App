import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import styles from './SortModal.style'

const SortModal = ({ isVisible, onClose, onSelectSortOption }) => {

  const handleSortOptionSelect = (option) => {
    onSelectSortOption(option);
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
        <Text style={styles.title}>Sırala</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleSortOptionSelect('lowToHigh')}
        >
          <Text style={styles.optionText}>En Düşük Fiyat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => handleSortOptionSelect('highToLow')}
        >
          <Text style={styles.optionText}>En Yüksek Fiyat</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SortModal;
