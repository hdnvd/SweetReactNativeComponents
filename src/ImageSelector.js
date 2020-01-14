/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import ImagePicker from "react-native-image-picker";
import SweetButton from "./SweetButton";

export default class ImageSelector extends Component<{}> {
    render() {
        return (
            <View  style={{marginTop: '3%'}}>

                <SweetButton title={this.props.title} iconPlacement='right' underlineColorAndroid={'transparent'}  buttonStyle={Styles.saveButton}  textStyle={Styles.saveButtonText} onPress={(OnEnd) => {
                    let options = {
                        title: this.props.title,
                        storageOptions: {
                            skipBackup: true,
                            path: 'images'
                        },
                        chooseFromLibraryButtonTitle:'انتخاب از گالری',
                        takePhotoButtonTitle:'گرفتن عکس',
                        cancelButtonTitle:'لغو'
                    };
                    ImagePicker.showImagePicker(options, (response) => {
                        console.log('Response = ', response);

                        if (response.didCancel) {
                            OnEnd(true);
                            console.log('User cancelled image picker');
                        }
                        else if (response.error) {
                            OnEnd(false);
                            console.log('ImagePicker Error: ', response.error);
                        }
                        else {
                            this.props.onConfirm(response.path,OnEnd);
                        }
                    });
                }}/>
            </View>);
    }
}

let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

    saveButton:
        {
            borderRadius: 5,
            minHeight: 35,
            height: 35,
            width: '84%',
            marginHorizontal: '8%',
            backgroundColor: "#051841",
            alignSelf: 'center',
        },

    saveButtonText:
        {
            fontFamily: 'IRANSansMobile',
            textAlignVertical: 'center',
            textAlign: 'center',
            paddingVertical: 10,
            fontSize: 13,
            color: '#ffffff',
        },
});
