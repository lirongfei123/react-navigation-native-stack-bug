/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import { WebView } from 'react-native-webview';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('Details')
    // }, 3000);
  }, []);
  return (
    <WebView onMessage={() => {
      navigation.navigate('Details')
    }} source={{ uri: 'https://cdn.qianrong.net/debug/' }} style={{ flex: 1 }} />
  );
}
function DetailsScreen({ navigation }) {
  return (
    <WebView source={{ uri: 'https://www.google.com/' }} style={{ flex: 1 }} />
  );
}
const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        animation: 'slide_from_right',
        customAnimationOnGesture: true,
      }} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
