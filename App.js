import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
    super();

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})

    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount(){
    var names = [];
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then((responseJson) => {
      var results = responseJson.results;
      for(var i = 0; i < results.length; i++){
        names.push(results[i].name);
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(names)
      })
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections = {true}
          dataSource = {this.state.dataSource}
          renderRow = {this.renderRow.bind(this)}
        />
      </View>
    );
  }

  pressCell(dataRow){
    alert(dataRow);
  }

  renderRow(dataRow){
    return(
    <TouchableHighlight onPress = {() => this.pressCell(dataRow)}>
      <View style = {styles.cell}>
        <Text>{dataRow}</Text>
      </View>
    </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  cell: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'

  },
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    paddingTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'purple',
    marginBottom: 5,
  },
});
