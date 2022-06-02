import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View   } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './scr/navbar/Home';
import  Settings  from './scr/navbar/Settings'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});