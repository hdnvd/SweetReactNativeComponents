/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text, View, Image, StyleSheet, Switch, Dimensions} from 'react-native';
export default class ViewBox extends Component<{}> {

    defaultProps={};
    CaptionColor=this.props.CaptionColor;
    render() {
        return (
            <View style={{...StyleSheet.flatten(styles.viewBox),...this.props.style}}>
                {(this.props.logo!=null || this.props.title!=null) &&
                <View style={styles.viewBoxTitleBox}>

                    {this.props.showDisableSwitch!=null &&
                    <Switch onValueChange={this.props.onDisableSwitchValueChange} value={this.props.enabled} style={styles.disableSwitch}/>
                    }
                    <View
                        style={{...StyleSheet.flatten(styles.viewBoxTitleBoxTitleAndHeader),...this.props.headerStyle}} >
                    {this.props.logo!=null  &&
                    <Image source={this.props.logo}
                           style={styles.viewBoxLogo}/>
                    }
                    {this.props.title != null &&
                        <Text style={[styles.viewBoxCaption,{color:this.CaptionColor}]}>{this.props.title}</Text>
                    }
                    </View>
                </View>
                }
                <View style={{...StyleSheet.flatten(styles.viewBoxContentContainer),...this.props.contentContainerStyle}}>
                {this.props.children}
                </View>
            </View>);
    }
}
ViewBox.defaultProps = {
};

let Window = Dimensions.get('window');
const styles=StyleSheet.create(
    {
        disableSwitch:
            {
                alignSelf:"flex-start",

            },
        viewBoxTitleBoxTitleAndHeader:
            {
                alignItems: 'flex-end',
                marginLeft:"auto",
            },

        viewBox:
            {
                width: Window.width - 20,
                justifyContent:'flex-start',
                paddingTop: 10,
                flexDirection:'row-reverse',
                flexWrap: 'wrap',
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                marginHorizontal: 10,
                marginTop: 10,
                backgroundColor: '#ffffff',
                shadowColor: "#565656",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
            },
        viewBoxTitleBox:
            {
                width:'100%',
                justifyContent: 'flex-start',
                alignContent:'center',
                // backgroundColor:"#ee0",
                flexDirection:'row',
            },

        viewBoxLogo:
            {
                width:Window.width*0.1,
                height:Window.width*0.1,
            },

        viewBoxCaption:
            {
                textAlign: 'right',
                fontSize: 13,
                fontFamily: 'IRANSansMobile',
                // width: '100%',
                marginBottom: 10,
            },

        viewBoxContentContainer:
            {
                justifyContent: 'flex-start',
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
            },
    });
