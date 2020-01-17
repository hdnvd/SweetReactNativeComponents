import React from 'react';
import {Dimensions, FlatList, StyleSheet} from 'react-native';
import SweetPage from './SweetPage';
import ListTopBar from '../ListTopBar';

export default class SweetListPage extends SweetPage {
    state =
        {
            ...super.state,
            nextStartRow: 0,
            SearchText: '',
            SearchFields: null,
            isLoading: false,
            isRefreshing: false,
            // displaySearchPage: false,
            sortField:'id',
        };
    setBackHandler() {
        // this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        //     this.setState({SearchText: '', SearchFields: null}, () => {
        //         this._loadData(true);
        //     });
        //     return true;
        // });
    }
    _loadData = (isRefreshing) => {
        throw new Error("SweetError: Please Implement LoadData in the ListPage")
    };
    _getFlatList(data,renderItem)
    {
        return <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            onEndReached={() => this._loadData(false)}
            onRefresh={() => this._loadData(true)}
            refreshing={this.state.isRefreshing}
            keyExtractor={item => item.id}
            onEndReachedThreshold={0.3}
            renderItem={renderItem}
        />
    }
    _getTopBar(sortFields,onSearchClick)
    {
        return <ListTopBar sortFields={sortFields}
                           onSortFieldSelect={(optionKey) => {
                               this.setState({sortField: optionKey}, () => {
                                   this._loadData(true);
                               });
                           }} onSearchClick={onSearchClick}

                           displaySearchTitleBar={this.state.SearchFields != null}
                           onCancelSearch={this._onCancelSearch}
        />
    }
    _onCancelSearch=() => {
        this.setState({
            SearchText: '',
            SearchFields: null,
        }, () => {
            this._loadData(true);
        });
    }

}

let Window = Dimensions.get('window');
const Styles=StyleSheet.create({

});
