import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './components/FirstPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Categories from './components/Categories';
import ForgotPass from './components/ForgotPass';
import Search from './components/Search';
import Books from './components/Books';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
      // <FirstPage/>
    // </View>
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='FirstPage' component={FirstPage} />
          <Drawer.Screen name='SignIn' component={SignIn} />
          <Drawer.Screen name='SignUp' component={SignUp} />
          <Drawer.Screen name="Categories" component={Categories} />
          <Drawer.Screen name="ForgotPass" component={ForgotPass} />
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="Books" component={Books} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
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
