import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { updateMessage } from './redux/actions/counterActions';
import { useSelector, useDispatch } from 'react-redux';
import SearchResults from './screens/SearchResults'
import SauceOverview from './screens/SauceOverview'
import Login from './screens/Login'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const App = () => {

  // const value = useSelector(state => state.counter.message);

  // const dispatch = useDispatch();
  // const stringValue = useSelector((state) => state.stringValue);

  // const handleUpdateString = () => {
  //   dispatch(updateMessage('New String Dispatched!'));
  // };

      /* <View style={styles.container}>
      {/* <Text>Value from Redux Store: {value}</Text>
      <Button title="Update String Value" onPress={handleUpdateString}></Button>
      <SearchResults />
    </View>*/

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="SearchResults"
          component={SearchResults}
          options={{title: 'Search Results'}}
        />
        <Stack.Screen
          name="SauceOverview"
          component={SauceOverview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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