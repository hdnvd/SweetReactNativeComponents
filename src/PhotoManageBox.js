/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Image,
    TouchableHighlight,
    ActivityIndicator,
    StyleSheet, Dimensions
} from 'react-native';
import SweetAlert from 'sweet-react-native-alert';

export default class PhotoManageBox extends Component<{}> {
    state={
        loading:false,
    };
    render() {
        let PhotoList=this.props.photos.map(dt=>{
            // console.log(Constants.ServerURL+'/'+dt.url);
            const urlPrefix=this.state.urlPrefix===undefined?'':this.state.urlPrefix;
            return (
                <View style={Styles.photomanagephotocontainer}>
                    <TouchableHighlight onPress={()=>{SweetAlert.displayDeleteAlert(dt.onDelete)}} style={Styles.photomanagedeleteiconcontainer}>
                        <Image style={Styles.photomanagedeleteicon} source={require('./images/delete.png')}/>
                    </TouchableHighlight>

                    <Image style={Styles.photomanagephoto} source={{uri: urlPrefix+dt.url}}
                           onLoadStart={()=>this.setState({loading:true})}
                           onLoadEnd={()=>this.setState({loading:false})}/>

                    {this.state.loading &&
                        <ActivityIndicator style={Styles.WaitDialog} animating={this.state.loading} size="small"
                                       color="#555555"/>
                    }
                </View>
            )});
        return (
            <View style={{flex: 1, flexDirection: 'row',flexWrap: 'wrap'}}>
                {PhotoList}
            </View>);
    }
}

let Window = Dimensions.get('window');
const Styles=StyleSheet.create({
    WaitDialog:{
        position:'absolute',
        zIndex:4,
    },
    photomanagephoto:
        {
            width: '100%',
            aspectRatio:1,
            borderWidth:2,
            borderColor:'#eee',
            borderRadius: 10,
            zIndex:2,
            position:'relative',

        },
    photomanagedeleteicon:
        {
            width: Window.width/13,
            height:  Window.width/13,
        },
    photomanagephotocontainer:
        {
            width: Window.width/2,
            height: Window.width/2,
            // backgroundColor:'#ee00ee',
            paddingVertical: Window.width*0.05,
            paddingHorizontal:Window.width/100,

            alignItems:'center',
            justifyContent:'center',
        },
    photomanagedeleteiconcontainer:{
        width: Window.width/13,
        height:  Window.width/13,
        position: 'absolute',
        right:Window.width/35,
        top:Window.width/35,
        zIndex:3,
    },
});
