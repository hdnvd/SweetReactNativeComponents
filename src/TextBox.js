/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

export default class TextBox extends Component<{}> {
    render() {
        const BorderColor=this.props.BorderColor;
        return (
            <View>
                <Text style={this.props.labelStyle!=null?this.props.labelStyle:Styles.inputLabel}>{this.props.title}</Text>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={()=>this.input.focus()}>
                    <View pointerEvents="none">
                <TextInput keyboardType={this.props.keyboardType} placeholder=''  underlineColorAndroid={'transparent'}
                           style={this.props.textStyle!=null?this.props.textStyle:[Styles.input,{borderColor:BorderColor}]}
                           ref = {(input) => this.input = input}
                           onChangeText={(text) =>{this.props.onChangeText(text)} }
                           allowFontScaling={false}
                           scrollEnabled={false}
                           placeholder={this.props.placeholder===undefined?this.props.title:this.props.placeholder}
                           value={(this.props.value===undefined||this.props.value===null)?'':this.props.value} {...this.props} />
                </View></TouchableOpacity>
            </View>);
    }
}

TextBox.defaultProps = {
};
let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

    inputLabel:
        {
            fontSize: 12,
            textAlign: 'right',
            direction: 'rtl',
            fontFamily: 'IRANSansMobile',
            width: '94%',
            marginHorizontal: '2%',
            marginTop: '2%',
        },
    input:
        {
            fontSize: 10,
            minHeight: 36,
            height: 41,
            textAlign: 'right',
            direction: 'rtl',
            fontFamily: 'IRANSansMobile',
            width: '94%',
            marginHorizontal: '2%',
            backgroundColor: "#ffffff",
            borderRadius: 5,
            marginTop: '2%',
            borderWidth: 1,
        },
});

