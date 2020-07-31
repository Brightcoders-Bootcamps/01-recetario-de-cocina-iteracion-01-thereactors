import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {Colors} from '../themes/colors';

export default function trending() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerTrending}>
        {/*This is a card*/}
        <View style={styles.cardDish}>
          <Image
            source={require('./../assets/image/PancakeCups.jpg')}
            style={styles.imgDish}
          />
          <Text style={styles.letter}>
            ousahdoasdasodasdaosdho saidhjasodhoiashdohas
          </Text>
        </View>
        {/*This is a card*/}
        <View style={styles.cardDish}>
          <Image
            source={require('./../assets/image/PancakeCups.jpg')}
            style={styles.imgDish}
          />
          <Text style={styles.letter}>
            ousahdoasdasodasdaosdho saidhjasodhoiashdohas
          </Text>
        </View>
        {/*This is a card*/}
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
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    marginVertical: 20,
  },
  imgDish: {
    width: '100%',
    height: 115,
    borderRadius: 15,
  },
  containerTrending: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    marginVertical: 20,
    marginHorizontal: 5,
  },
  cardDish: {
    flex: 3,
    marginHorizontal: 10,
  },
  letter: {
    color: Colors.white,
    fontSize: 18,
    marginTop: 5,
  },
});
