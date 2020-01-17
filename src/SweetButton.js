/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Dimensions, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

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
            <Button style={this.props.style!=null?this.props.style:Styles.SweetButton} onPress={()=>{
                if (!this.state.waiting)
                {
                    this.onProcessStarting();
                    this.props.onPress(this.onProcessCompleted);
                }}
            } loading={this.state.waiting} contentStyle={Styles.SweetButtonTextContainer} labelStyle={Styles.SweetButtonText} icon={this.props.icon}
            >

                {this.props.title}
            </Button>
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
    SweetButtonTextContainer:
        {
            paddingVertical: 10,
            height: '100%',
            flexDirection:'row-reverse',
        },
    SweetButtonText:
        {
            fontFamily: 'IRANSansMobile',
            textAlignVertical: 'center',
            textAlign: 'center',
            fontSize: 13,
            color: '#ffffff',
        },
});

