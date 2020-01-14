/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Text, View, TouchableHighlight, Image, Dimensions, StyleSheet} from 'react-native';
import SweetSelectorModal from './SweetSelectorModal';


export default class ListTopBar extends Component<{}> {
    state={
      displaySortFieldSelect:false,
    };
    render() {
        return (
            <View>
            <View style={Styles.listTopBar}>
                <TouchableHighlight onPress={() => {
                    this.setState({displaySortFieldSelect:true});
                }}
                                    activeOpacity={0.3}
                                    underlayColor='#ffffff'>
                    <View style={Styles.listTopBarItem}>
                        <SweetSelectorModal
                            options={this.props.sortFields}
                            onValueChange={(option)=>{ this.props.onSortFieldSelect(option.id);}}
                            onHideRequest={()=>{this.setState({displaySortFieldSelect:false});}}
                            visible={this.state.displaySortFieldSelect}/>
                        <Text style={Styles.listTopBarItemText}>مرتب سازی</Text>
                        <Image source={require('./images/sort.png')}
                               style={Styles.listTopBarItemIcon} resizeMode={'stretch'}/>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onSearchClick}
                                    activeOpacity={0.3}
                                    underlayColor='#eee'>
                    <View style={Styles.listTopBarItem}>

                        <Text style={Styles.listTopBarItemText}>جستجو</Text>
                        <Image source={require('./images/filter.png')}
                               style={Styles.listTopBarItemIcon} resizeMode={'stretch'}/>
                    </View>
                </TouchableHighlight>
            </View>
                {this.props.displaySearchTitleBar &&
                <View style={Styles.searchTitleTopBar}>
                    <Text style={Styles.searchTitleTopBarText}>نتایج جستجو</Text>
                    <TouchableHighlight style={Styles.searchTitleTopBarCancelIconContainer}
                                        onPress={this.props.onCancelSearch}
                                        activeOpacity={0.3}
                                        underlayColor='#fff'>
                        <Image source={require('./images/cancel.png')}
                               style={Styles.searchTitleTopBarCancelIcon} resizeMode={'stretch'}/>
                    </TouchableHighlight>
                </View>
                }
            </View>
        );
    }
}


let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

    listTopBar:
        {
            backgroundColor:'#ffffff',
            height:40,
            flexDirection:'row'
        },

    listTopBarItem:
        {
            width:Window.width/2,
            height:40,
            backgroundColor:'#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.4,
            borderColor: '#afafaf',
            flexDirection:'row',
        },
    listTopBarItemIcon:
        {
            width:20,
            height:20,
        },
    listTopBarItemText:
        {

            direction: 'rtl',
            marginHorizontal:3,
            fontFamily: 'IRANSansMobile',
        },
    searchTitleTopBarCancelIcon:
        {
            width:18,
            height:18,
        },

    searchTitleTopBarCancelIconContainer:
        {
            width:50,
            height:25,
            position:'absolute',
            left: 15,
            top:10
        },
    searchTitleTopBarText:
        {
            width:'100%',
            height:'100%',
            fontSize: 15,
            justifyContent:'center',
            marginTop:5,
            fontFamily: 'IRANSansMobile',
            textAlign:'center',
        },
    searchTitleTopBar:
        {
            width:'100%',
            height:40,
            borderBottomWidth: 0.4,
            borderColor: '#afafaf',
            justifyContent:'center',
            flexDirection:'row'
        },
});
