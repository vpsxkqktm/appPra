import * as React from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper'



export default function Home() {
    return(
    <SafeAreaView style={styles.container}>
        <View style={SizeSwiper}>
            <Swiper style={styles2.wrapper} showsButtons={true}>
                <View style={styles2.slide1}>
                <Text style={styles2.text}>Hello Swiper</Text>
                </View>
                <View style={styles2.slide2}>
                <Text style={styles2.text}>Beautiful</Text>
                </View>
                <View style={styles2.slide3}>
                <Text style={styles2.text}>And simple</Text>
            </View>
        </Swiper>
      </View>
      <View style={{
          flex: 1,
          backgroundColor: "red",
          flexDirection: "row"
      }}>
          <View style={{
              flex: 1,
              backgroundColor: "orange",
              justifyContent: "flex-end"
          }}>

          </View>
          <View style={{
              flex: 1,
              backgroundColor: "green",
              justifyContent: "flex-end"
          }}>
          </View>
      </View>
      <View style={{
          flex: 1,
          backgroundColor: "red",
          flexDirection: "row"
      }}>
          <View style={{
              flex: 1,
              backgroundColor: "blue",
              justifyContent: "flex-end"
          }}></View>
          <View style={{
              flex: 1,
              backgroundColor: "yellow",
              justifyContent: "flex-end"
          }}></View>
      </View>
      <View style={{
          flex: 1,
          backgroundColor: "red",
          flexDirection: "row"
      }}>
          <View style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "flex-end"
    }}></View>
        <View style={{
            flex: 1,
            backgroundColor: "grey",
            justifyContent: "flex-end"
        }}>

    </View>
    </View>
    </SafeAreaView>
    );
}

const SizeSwiper = StyleSheet.create({
    flex: 1.5,
});
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
const styles2 = StyleSheet.create({
wrapper: {},
slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
},
slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
},
slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
},
text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
}
})