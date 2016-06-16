import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  AlertIOS,
  Text,
  ListView,
  View
} from 'react-native';

import styles from './styles';
import StatusBar from './App/StatusBar';
import ActionButton from './App/ActionButton';
import ListItem from './App/ListItem';

class GroceryApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: [],
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        })
      };
    }

    _onPress(item) {
      Alert.alert(
        'Delete',
        null,
        [
          {
              text: 'Complete',
              onPress: () => {
                  const list = this.state.list
                    .filter(str => str.title !== item.title)
                  this.setState({
                      list: list,
                      dataSource: this.state.dataSource.cloneWithRows(list)
                  });
              }
          },
          {text: 'Cancel', onPress: (text) => console.log('Cancel')}
        ]
      );
    };

    _renderItem(item) {
      return (
         <ListItem item={item} onPress={() => this._onPress(item)}/>
      );
    }

    _addItem() {
        AlertIOS.prompt(
          'Add New Item',
          null,
          [
            {
              text: 'Add',
              onPress: (text) => {
                  this.state.list.push({ title: text });
                  this.setState({
                    dataSource: this.state.dataSource
                      .cloneWithRows(this.state.list)
                  })
              }
            },
          ]
        );
      }

    render() {
      return (
        <View style={styles.container}>
          <StatusBar title={"Grocery List " + this.state.dataSource.getRowCount() } />
          <ListView
              enableEmptySections
              dataSource={this.state.dataSource}
              renderRow={this._renderItem.bind(this)}
              style={styles.listview} />
          <ActionButton
              title="Add"
              onPress={this._addItem.bind(this)} />
        </View>
      );
    }
}

AppRegistry.registerComponent('GroceryApp', () => GroceryApp);
