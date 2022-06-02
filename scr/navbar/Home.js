import * as React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
    return(
    <SafeAreaView style={styles.container}>
        <Text>Hi!</Text>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
  });
  