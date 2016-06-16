'use strict';
import React, { Component } from 'react';
import {
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import styles from '../styles.js';

class ActionButton extends Component {
  render() {
    return (
      <View style={styles.action}>
          <TouchableHighlight
              underlaycolor={styles.constants.actionColor}
              onPress={this.props.onPress}>
            <Text style={styles.actionText}>
                {this.props.title}
            </Text>
          </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;
