/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {View, Modal, Dimensions, StyleSheet} from 'react-native';
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import TimeSelector from './TimeSelector';

export default class SweetDatePickerModal extends Component<{}> {
    constructor(props)
    {
        super(props);
    }
    render() {
        const BorderColor=this.props.BorderColor;
        const datePickerContainerStyle=[Styles.datepickercontainer,{borderColor:BorderColor}];
        return (
            <Modal visible={this.props.visible} transparent={true} animationType={'fade'} onRequestClose={this.props.onRequestClose}>
                <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <View style={datePickerContainerStyle}>
                    <PersianCalendarPicker
                        isRTL={true}
                        style={datePickerContainerStyle}
                        scaleFactor={500}
                        onDateChange={this.props.onDateChange}
                        allowRangeSelection={false}
                        textStyle={Styles.datepickertext}
                    />
                </View>
                </View>
            </Modal>);
    }
}

SweetDatePickerModal.defaultProps = {
};

let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

    datepickercontainer:
        {
            // maxHeight: Window.height*0.4,
            // height:Window.height*0.4,
            backgroundColor: '#ffffff',
            borderRadius:10,
            padding: 20,
            marginVertical: 7,
            marginHorizontal: 7,
            borderWidth:2,
        },

    datepickertext:
        {
            direction: 'rtl',
            fontFamily: 'IRANSansMobile',
        },
});
