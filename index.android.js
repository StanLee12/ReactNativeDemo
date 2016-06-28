/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    ToolbarAndroid
} from 'react-native';

var TEST_DATA = [{
    title: '标题',
    year: '2016',
    posters: {thumbnail: 'http://baike.baidu.com/pic/%E6%96%B0%E5%9E%A3%E7%BB%93%E8%A1%A3/8035884/0/e7cd7b899e510fb3a91f7aa8d133c895d1430c8e?fr=lemma&ct=single#aid=0&pic=e7cd7b899e510fb3a91f7aa8d133c895d1430c8e'}
}];

class DemoProject extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
        this.state = {dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'])};
    }

    render() {

        return (

            <View style={styles.container}>
                <ToolbarAndroid
                    title="Title"/>
                <Text style={styles.welcome}>
                    啊
                </Text>
                <Text style={styles.instructions}>
                    哦
                </Text>
                <Image style={styles.imgsize} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}/>
                <Text style={styles.welcome}>我这可是测试啊</Text>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(rowData) => <Text>{rowData}</Text>}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    imgsize: {
        width: 80,
        height: 80,
        backgroundColor: '#232323'
    },
});

AppRegistry.registerComponent('DemoProject', () => DemoProject);
