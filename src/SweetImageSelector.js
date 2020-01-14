/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    TouchableOpacity,
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    Animated
} from 'react-native';
import ImagePicker from "react-native-image-picker";

export default class SweetImageSelector extends Component<{}> {
    state={
        loading:false,
    };
    constructor(props) {
        super(props);
    }
    randomNum=new Date().getTime();
    render() {
        let url=this.props.url+'?randomNum='+this.randomNum;
        console.log(url);

        return (
            <View  style={Styles.Selector}>
                <View style={Styles.PreviewImageBox}>
                    <View style={Styles.TitleBox}>
                        <Text style={Styles.Title}>{this.props.title}</Text>
                    </View>
                    <Animated.Image style={Styles.PreviewImage} resizeMode={'cover'}
                           source={this.state.preview===undefined?{uri:url}:this.state.preview}
                                    onLoadStart={()=>this.setState({loading:true})}
                                    onLoadEnd={()=>this.setState({loading:false})}
                    />
                    {this.state.loading &&
                        <ActivityIndicator style={Styles.WaitDialog} animating={this.state.loading} size="small"
                                           color="#555555"/>
                    }
                </View>
                <SelectButton onPress={() => {
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
                            console.log('User cancelled image picker');
                        }
                        else if (response.error) {
                            console.log('ImagePicker Error: ', response.error);
                        }
                        else {
                            this.setState({preview:{uri:'file://'+response.path}},()=>{
                                this.props.onConfirm(response.path);
                            });

                        }
                    });
                }}/>

            </View>);
    }
}

class SelectButton extends Component<{}>{
    render() {
        return (
            <View style={Styles.SelectButtonContainer}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={Styles.SelectButton}>
                        <Image style={Styles.SelectImage} source={require('./images/icons/selectimage.png')}/>
                    </View>
                </TouchableOpacity>
            </View>);
    }
}
let Window = Dimensions.get('window');
const Styles=StyleSheet.create({
    SelectButton:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
    },
    SelectButtonContainer:{
        height:Window.width*0.3,
        width:'33%',
        backgroundColor:'#eee',
        borderTopRightRadius:9,
        borderBottomRightRadius:9,
        borderLeftColor:'#fff',
        borderLeftWidth:3,
    },
    PreviewImageBox:{
        width:'66%',

        height:Window.width*0.3,
        backgroundColor:'#eee',
        borderTopLeftRadius:9,
        borderBottomLeftRadius:9,
        justifyContent:'center',
        alignItems:'center',
        padding:0,
    },
    PreviewImage:{
        position:'absolute',
        width:'100%',
        height:'100%',
        borderTopLeftRadius:9,
        borderBottomLeftRadius:9,
        zIndex:3,
    },
    SelectImage:{

        width:Window.width*0.1,
        height:Window.width*0.1,
    },
    Selector:{
        marginTop: '3%',
        flexDirection: 'row',
        flexGrow:3,
        padding:10,
        width:'100%',
    },
    Title:{
        fontFamily:"IRANSansMobile",
        color:'#111',
    },
    TitleBox:{
        zIndex:5,
        borderRadius:5,
        backgroundColor:'#eee',
        padding:10,
        opacity:0.8,
    },
    WaitDialog:{
        position:'relative',
        zIndex:4,
    },
});
