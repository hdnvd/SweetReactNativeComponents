/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, StyleSheet, View,Text} from 'react-native';
import {Checkbox } from 'react-native-paper';
import {ReactAppConfig} from 'sweet-react-common';

export default class CheckedRow extends Component<{}> {

  render() {
    const IconColor=this.props.IconColor;
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
        <View style={Styles.container}>
          <Checkbox
              checked={checked}
              status={checked ? 'checked' : 'unchecked'}
              onPress={this.props.onPress}
              color={IconColor}
          />
          <Text style={Styles.title}>{this.props.title}</Text>
        </View>
    );
  }
}

CheckedRow.defaultProps = {
};
let Window = Dimensions.get('window');
const Styles=StyleSheet.create({
  container:{
    width:'100%',
    flexDirection:'row-reverse',
    alignItems:'center',
    paddingHorizontal: '2%',
  },
  title:{
    fontFamily:ReactAppConfig.getDefaultFontName(),
    fontSize: 12,
  }

});
