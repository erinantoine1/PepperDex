import React, { Component } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { ComponentType } from 'react';

type RootStackParamList = {
  SauceOverview: undefined,
  SearchResults: undefined,
  // Add other screens to the param list if needed
};

type SauceOverviewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SauceOverview'>;
};

const SauceOverview: React.FC<SauceOverviewProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SauceOverview Page</Text>
      <Button
        title="Go to Search Results"
        onPress={() =>
          navigation.navigate('SearchResults')
        }
      />
    </View>
  );
};

export default SauceOverview;

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