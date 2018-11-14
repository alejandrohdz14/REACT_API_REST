import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class NavBar extends React.Component{
    render(){
        return(
            <View>
                <Text>{this.props.titleNavBar}</Text>
            </View>
        );
    }
}