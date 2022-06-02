import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform   } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './scr/navbar/Home';
import  Settings  from './scr/navbar/Settings'
import { NavigationContainer } from '@react-navigation/native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';





const Tab = createMaterialTopTabNavigator();
export default function App() {
  let adunitId =  Platform.select({
    ios:"ca-app-pub-3940256099942544/2934735716",
    android: "ca-app-pub-3940256099942544/2934735716"
  });
  let loadAd = async () => {
    await AdMobBanner.setAd
  };
  return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={"The banner does not work properly"} />
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});