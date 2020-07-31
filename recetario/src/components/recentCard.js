import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Colors} from '../themes/colors';

export default function recent() {
  return (
    <View style={styles.containerRecent}>
      <View style={styles.cardDish}>
        <Image
          source={require('./../assets/image/PancakeCups.jpg')}
          style={styles.imgDish}
        />
        <Text style={styles.letter}>
          ousahdoasdasodasdaosdho saidhjasodhoiashdohas
        </Text>
      </View>
      <View style={styles.cardDish}>
        <Image
          source={require('./../assets/image/PancakeCups.jpg')}
          style={styles.imgDish}
        />
        <Text style={styles.letter}>
          ousahdoasdasodasdaosdho saidhjasodhoiashdohas
        </Text>
      </View>
      <View style={styles.cardDish}>
        <Image
          source={require('./../assets/image/PancakeCups.jpg')}
          style={styles.imgDish}
        />
        <Text style={styles.letter}>
          ousahdoasdasodasdaosdho saidhjasodhoiashdohas
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgDish: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  containerRecent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  cardDish: {
    width: '45%',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  letter: {
    color: Colors.white,
    fontSize: 18,
    marginTop: 12,
  },
});
