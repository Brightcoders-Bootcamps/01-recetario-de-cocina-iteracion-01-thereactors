import React from 'react';
import {SafeAreaView, ScrollView,View, Text, TextInput, StyleSheet} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../themes/colors';

export default function mainScreen() {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={{styles.containerSearch}}>
                    <View>
                        <FontAwesomeIcons name='search' size={30} color={Colors.white}/><TextInput style={{styles.inputSearch}} placeholder='What do you want to eat?'/> <FontAwesomeIcons name='microphone' size={30} color={Colors.white}/>
                    </View>
                </View>
                <View style={{styles.containerTrending}}>

                </View>
                <View style={{styles.containerRecent}}>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
    mainContainer: {  //this is the first containes
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.backgroundScreen,
    },
    containerSearch: { //this is a containes
        flex: 1,
        backgroundColor: 'red',
    },
    inputSearch: {
        color: Colors.white,
    },
    containerTrending: { //this is a containes
        flex: 2,
        backgroundColor: 'white',
    },
    containerRecent: {  //this is a containes
        flex: 3,
        backgroundColor: 'yellow',
    },

});