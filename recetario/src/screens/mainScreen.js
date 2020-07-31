import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../themes/colors';
import Trending from '../components/trendingCard';
import Recent from '../components/recentCard';

export default function mainScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        {/* Container Search Input */}
        <View style={styles.containerSearch}>
          <FontAwesomeIcons
            name="search"
            size={20}
            color="white"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.inputSearch}
            placeholderTextColor={Colors.white}
            placeholder="What do you want to eat?"
          />
          <FontAwesomeIcons
            name="microphone"
            size={20}
            color="white"
            style={styles.microIcon}
          />
        </View>
        <Text style={styles.letters}>TRENDING</Text>
        {/* Container Trending Component */}
        <Trending />
        <Text style={styles.letters}>RECENT</Text>
        {/* Container Recents Component */}
        <Recent />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundScreen,
  },
  containerSearch: {
    marginVertical: 30,
    flex: 0.08,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: Colors.backgroundSearch,
    marginHorizontal: 25,
  },
  inputSearch: {
    width: 280,
    marginHorizontal: 5,
    color: Colors.white,
  },
  letters: {
    color: Colors.title,
    fontSize: 24,
    marginLeft: 15,
  },
});
