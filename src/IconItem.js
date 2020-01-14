/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';

export default class IconItem extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      isLogoVisible: props.displayLogo != null ? props.displayLogo : false,
    };
  }
  render() {
    return (
      <View
        style={
          this.props.style != null
            ? this.props.style
            : Styles.IconItemStyle
        }>
        {!this.state.isLogoVisible && (
          <Text style={Styles.IconItemTitle}>{this.props.title} </Text>
        )}
        {this.state.isLogoVisible && (
          <Image style={Styles.IconItemLogo} source={this.props.logo} />
        )}
        <Text style={Styles.IconItemContent}>{this.props.content}</Text>
      </View>
    );
  }
}
let Window = Dimensions.get('window');
const Styles=StyleSheet.create({
    IconItemStyle:
        {
            width:Window.width/5,
            height:Window.width/5,
            backgroundColor:'rgba(167,236,131,0.8)',
            borderRadius:Window.width/10,
            marginVertical:Window.width*0.02,
            marginHorizontal:Window.width/17,
            paddingHorizontal:Window.width/25,
            paddingVertical:Window.width/25,
            shadowColor: "#232323",
            shadowOffset: {
                width: -3,
                height: 4,
            },
            shadowOpacity: 0.9,
            shadowRadius: 2.22,
        },
    IconItemLogo:
        {
            width:Window.width*0.09,
            height:Window.width*0.09,
            marginHorizontal:Window.width*0.015,

        },
    IconItemContent:
        {
            color: '#ffffff',
            direction: 'rtl',
            textAlign: 'center',
            fontFamily: 'IRANSansMobile',
            fontSize: 10,
        },
    IconItemTitle:
        {
            color: '#ffffff',
            direction: 'rtl',
            textAlign: 'center',
            fontFamily: 'IRANSansMobile',
            fontSize: 10,
        },
});
