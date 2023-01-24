import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Home from './src/screens/home';
import Registrations from './src/screens/registrations';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();


export default function App() {
  return (
    // <Provider store = {store}>

    // {/* <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View> */}

    // <Home />

    // </Provider>
    <Provider store={store}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
        
          <Screen options={{headerShown: false}} name="Home" component={Home} />
          <Screen name="Registrations" component={Registrations} />
          
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
