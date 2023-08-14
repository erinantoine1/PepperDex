import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const SauceIngredHx = () => {
  return (
    <View style={styles.container}>
      <Text>SauceIngredHx Page</Text>
    </View>
  );
};

export default SauceIngredHx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
  },
});