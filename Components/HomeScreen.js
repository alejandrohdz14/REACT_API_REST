import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class HomeScreen extends React.Component{

    static navigationOptions = {
        header: null,
    };
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.welcome}>PokeApi</Text>
                <Text style = {styles.instructions}>All the Pokémon data you'll ever need in one place,
easily accessible through a modern RESTful API.</Text>
                <Button style ={styles.button} title="Go to List" onPress={() => this.props.navigation.navigate('List')}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
    },
    container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 200
    },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'yellow',
    marginBottom: 5,
  },

});