import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewView extends React.Component {

static navigationOptions = {
    title: 'Detalles',
    header: null,
  };


render(){

    const {navigation} = this.props;
    const passProps = navigation.getParam('passProps', 'null');
        return(
            <View style={styles.containerDetail}>
                <View style={styles.navigationBar}>
                    <Text style={styles.navigationTitle}>Description</Text>
                </View>
                <Text style = {styles.text}>{ passProps }</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 18,
        color: 'yellow',
    },
    containerDetail: {
        paddingTop: 10,
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    navigationBar: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
    },
    navigationTitle: {
        flex: 3,
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
    },
})