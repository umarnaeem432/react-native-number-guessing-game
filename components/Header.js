import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Colors from '../constants/colors'
const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        marginTop: Dimensions.get('window').height * 0.03,
    }
});

export default Header;