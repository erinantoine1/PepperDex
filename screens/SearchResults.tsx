import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SauceOverview: undefined,
  SearchResults: undefined,
  // Add other screens to the param list if needed
};

type SauceOverviewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SauceOverview'>;
};

const SearchResults: React.FC<SauceOverviewProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SearchResults Page</Text>
      <Button
        title="Go to Sauce Overview"
        onPress={() =>
          navigation.navigate('SauceOverview')
        }
      />
    </View>
  );
};

export default SearchResults;

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