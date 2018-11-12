import React, {Component} from 'react';
import{Text, View, StyleSheet} from 'react-native';

export default class TextComponent extends Component{
    render() {
        return (
            <View>
                <Text style={styles.text}>Esto es un componente externo</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
})