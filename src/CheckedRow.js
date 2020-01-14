/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class CheckedRow extends Component<{}> {
  render() {
    let checked = false;
    if (
      this.props.checked === true ||
      this.props.checked === 'true' ||
      this.props.checked === '1' ||
      this.props.checked === 1
    ) {
      checked = true;
    }
    return (
      <View>
        <CheckBox
          title={this.props.title}
          checked={checked}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

});
