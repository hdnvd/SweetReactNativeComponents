/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text, View, TextInput, TouchableWithoutFeedback, Dimensions, StyleSheet} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";

export default class TimeSelector extends Component<{}> {
    BorderColor=this.props.BorderColor;
    constructor(props) {
        super(props);
        this.state = { isDateTimePickerVisible: false };
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.setState({isDateTimePickerVisible: true})}>
                <View>
                    <Text style={Styles.inputLabel}>{this.props.title}</Text>
                    <TextInput placeholder='' editable={false} underlineColorAndroid={'transparent'}
                               style={this.props.textStyle!=null?this.props.textStyle:[Styles.input,{borderColor:this.BorderColor}]} value={this.props.value}/>
                    <DateTimePicker
                        mode={"time"}
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={(date) => {
                            this.props.onConfirm(date.getHours() + ":" + date.getMinutes());
                            this.setState({isDateTimePickerVisible: false});
                        }
                        }
                        onCancel={()=>this.setState({isDateTimePickerVisible: false})}
                    />
                </View>
            </TouchableWithoutFeedback>);
    }
}

TimeSelector.defaultProps = {
};
let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

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
});

