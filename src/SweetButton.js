/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator, Dimensions, StyleSheet} from 'react-native';

export default class SweetButton extends Component<{}> {
    state={
        waiting:false,
    };
    onProcessStarting=()=>
    {
      this.setState({
          waiting:true
      });
    };
    onProcessCompleted=(isSuccessful)=>
    {
        this.setState({
            waiting:false
        });
    };
    render() {
        return (
            <View style={this.props.style!=null?this.props.style:Styles.SweetButton}>
                <TouchableOpacity onPress={()=> {
                    if (!this.state.waiting)
                    {
                        this.onProcessStarting();
                        this.props.onPress(this.onProcessCompleted);
                    }
                }}>
                    {this.state.waiting &&
                    <View  style={Styles.SweetButtonWaitDialogContainer}>
                        <ActivityIndicator style={Styles.SweetButtonWaitDialog} animating={this.state.waiting} size="small"
                                           color="#ffffff"/>
                    </View>
                    }
                    {!this.state.waiting &&
                    <Text style={Styles.SweetButtonText}>
                        {this.props.title}
                    </Text>
                    }
                </TouchableOpacity>
                {/*<Button iconPlacement='right' underlineColorAndroid={'transparent'} buttonStyle={generalStyles.saveButton}  textStyle={generalStyles.saveButtonText} {...this.props}/>*/}
            </View>
        );
    }
}

let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

    SweetButton:
        {
            borderRadius: 8,
            minHeight: 45,
            height: 45,
            width: Window.width * 0.50,
            marginHorizontal: '8%',
            marginVertical: 5,
            backgroundColor: "#051841",
            alignSelf: 'center',
        },
    SweetButtonWaitDialogContainer:
        {
            height: '100%'
        },
    SweetButtonWaitDialog:
        {
            // height:'100%',
            paddingVertical: 10,
        },
    SweetButtonText:
        {
            fontFamily: 'IRANSansMobile',
            textAlignVertical: 'center',
            textAlign: 'center',
            paddingVertical: 10,
            fontSize: 13,
            color: '#ffffff',
            height: '100%'
        },
});

