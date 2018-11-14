import React from 'react';
import { StyleSheet, Text, View, Button, ListView, TouchableHighlight, TextInput } from 'react-native';
import NavBar from './NavBar'

export default class ListViewResults extends React.Component {

  static navigationOptions = {
    title: 'Lista',
    header: null,
  };

  constructor() {
    super();

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
    this.state = {
      dataSource: ds.cloneWithRows([]),
      rawData: '',
      text: '',
      empty: true,
      isLoading: false,
      isLoaded: false,
    }
  }

  componentDidMount() {
    var names = [];
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((responseJson) => {
        var results = responseJson.results;
        for (var i = 0; i < results.length; i++) {
          names.push(results[i].name);
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(names),
          rawData: names,
          detalles: results
        })
      })
  }

  filterSearch(text) {
    this.setState({ text })
    let newData = this.dataFilter(text, this.state.rawData);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
    })
  }

  dataFilter(text, names) {
    return names.filter(function (item) {
      const itemData = item.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.navigationBar}>
          <Text style = {styles.navigationTitle}>List of Pokemon</Text>
        </View>
        <TextInput style={styles.input} onChangeText={(text) => this.filterSearch(text)} value={this.state.text}></TextInput>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }

  pressCell(dataRow) {
    this.props.navigation.push('Details', {
      passProps: dataRow
    })
  }

  renderRow(dataRow) {
    return (
      <TouchableHighlight onPress={() => this.pressCell(dataRow)}>
        <View style={styles.cell}>
          <Text style={styles.textCell}>{dataRow}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  textCell: {
    color: 'yellow'
  },
  input: {
    height: 30,
    borderWidth: 1,
    borderColor: '#cecece',
    marginTop: 10,
    marginBottom: 0,
    marginHorizontal: 10,
    color: 'yellow',
  },
  cell: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black'
    
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
