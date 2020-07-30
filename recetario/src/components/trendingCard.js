import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Colors} from '../themes/colors';

export default function trending() {
  return (
    <View>
      <View style={styles.containerTrending}>
        <View
          style={{
            flex: 3,
            marginHorizontal: 10,
          }}>
          <Image
            source={require('./../assets/image/PancakeCups.jpg')}
            style={styles.imgDish}
          />
          <Text style={{color: Colors.white}}>
            ousahdoasdasodasdaosdho saidhjasodhoiashdohas
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            marginHorizontal: 10,
          }}>
          <Image
            source={require('./../assets/image/PancakeCups.jpg')}
            style={styles.imgDish}
          />
          <Text style={{color: Colors.white}}>
            ousahdoasdasodasdaosdho saidhjasodhoiashdohas
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            marginHorizontal: 10,
          }}>
          <Image
            source={require('./../assets/image/PancakeCups.jpg')}
            style={styles.imgDish}
          />
          <Text style={{color: Colors.white}}>
            ousahdoasdasodasdaosdho saidhjasodhoiashdohas
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgDish: {
    width: '100%',
    height: 115,
    borderRadius: 15,
  },
  containerTrending: {
    flexDirection: 'row',
    marginTop: 20,
  },
  letter: {
    color: Colors.white,
    fontSize: 18,
    marginTop: 5,
  },
});
