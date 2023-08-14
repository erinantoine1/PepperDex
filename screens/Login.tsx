import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SauceOverview: undefined,
  SearchResults: undefined,
  Login: undefined,
};

type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};

const Login: React.FC<LoginProps> = ({ navigation }) => {
  WebBrowser.maybeCompleteAuthSession();

  const discovery = useAutoDiscovery('https://login.microsoftonline.com/common/v2.0');

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '39de7726-91b2-4c15-b664-e868179f20be',
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri: makeRedirectUri({
        native: 'exp://192.168.1.221:19000',
      }),
    },
    discovery
  );

  const handleLoginPress = async () => {
    const result = await promptAsync();
    if (result.type === 'success') {
      // User logged in successfully, navigate to the "Home" screen
      navigation.navigate('SearchResults');
    }
  };

  return (
    <View style={styles.container}>
      <Text>PepperDex</Text>
      <Button color={styles.Button.color} title="Login with Microsoft" onPress={handleLoginPress} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    color: 'red'
  },
});
