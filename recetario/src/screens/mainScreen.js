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
        {/* Container Trending Component */}
        <Text style={styles.Trending}>TRENDING</Text>
        <Trending></Trending>
        {/* Container Recents Component */}
        <Text style={styles.Recent}>RECENT</Text>
        <Recent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    //this is the first containes
    flex: 1,

    backgroundColor: Colors.backgroundScreen,
  },

  containerSearch: {
    //
    // width: '90%',
    marginTop: 20,
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
  // searchIcon: {
  //   marginLeft: 20,
  // },
  // microIcon: {
  //   marginRight: 20,
  // },
  containerTrending: {
    //this is a containes
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  Trending: {
    color: Colors.title,
    fontSize: 24,
    marginTop: 25,
    marginBottom: 10,
  },
  containerRecent: {
    //this is a containes
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  Recent: {
    color: Colors.title,
    fontSize: 24,
    marginTop: 25,
    marginBottom: 10,
  },
});
