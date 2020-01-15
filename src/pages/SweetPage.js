import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

export default class SweetPage extends Component<{}> {
    Window = Dimensions.get('window');
    state =
        {
            ...super.state,
            isLoading: false,
        };
    componentWillUnmount() {
        this.removeBackHandler();
    }
    componentDidMount() {
    }
    removeBackHandler(){
        if(this.backHandler!=null)
            this.backHandler.remove();
    }
    getActiveRouteState(route) {
        if (!route.routes || route.routes.length === 0 || route.index >= route.routes.length) {
            return route;
        }

        const childActiveRoute = route.routes[route.index];
        return this.getActiveRouteState(childActiveRoute);
    }
    renderPage(content)
    {
        return (<View flex={1}>{content}</View>);
    }


}

let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

    actionButtonContainer:
        {
            marginTop:20,
            width: '100%',
            height:Window.width*0.13,
            justifyContent: 'flex-end',
        },
});
