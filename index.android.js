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
    ToolbarAndroid,
    Dimensions,
    DrawerLayoutAndroid,
    ToastAndroid,
    TouchableHighlight,
    TouchableNativeFeedback,
} from 'react-native';


var DRAWER_REF = 'drawer';
var DRAWER_WIDTH_LEFT = 56;
var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HIGHT = Dimensions.get('window').height;
var ToolbarActions = [{title: '提醒', icon: require('image!ic_launcher'), show: 'always'},
    {title: '菜单1', show: 'never'},
    {title: '菜单2', show: 'never'},];
var TITLE_REF = 'title';

class DemoProject extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1 !== r2});
        this.state = {dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'])};
    }

    _renderDrawerView() {
        return (
            <View style={styles.drawerview}>
            </View>
        );
    }

    updateReadState() {
        ()=>this.refs[TITLE_REF].setNativeProps({
            style: {
                color: '#1E90FF',
            }
        });
    }

    onActionSelected(position) {
        if (position === 1) {
            ToastAndroid.show("menu 1", ToastAndroid.SHORT);
        } else if (position === 2) {
            ToastAndroid.show("menu 2", ToastAndroid.SHORT);
        }
    }

    render() {

        return (
            <DrawerLayoutAndroid
                ref={DRAWER_REF}
                drawerWidth={WINDOW_WIDTH-DRAWER_WIDTH_LEFT}
                keyboardDismissMode="on-drag"
                renderNavigationView={this._renderDrawerView}
                drawerPosition={DrawerLayoutAndroid.positions.Left}>
                <View style={styles.container}>
                    <ToolbarAndroid
                        navIcon={require('image!ic_launcher')}
                        titleColor="white"
                        actions={ToolbarActions}
                        onIconClicked={()=> this.refs[DRAWER_REF].openDrawer()}
                        style={styles.testbar}
                        onActionSelected={this.onActionSelected}
                        title="Title"/>
                    <Text style={styles.welcome}>
                        啊
                    </Text>
                    <Text style={styles.instructions}>
                        哦
                    </Text>
                    <Image style={styles.imgsize} source={{uri: 'ic_launcher'}}/>
                    <Text style={styles.welcome}>我这可是测试啊</Text>
                    <ListView dataSource={this.state.dataSource}
                              renderRow={(rowData) =>
                              <View {...this.props}>
                              <TouchableNativeFeedback
                              onPress={this.updateReadState}>
                              <View style={styles.listcolumn}><Text ref={TITLE_REF}>{rowData}</Text>
                          <Image style={styles.innerSize} source={{uri: 'ic_launcher'}}/>
                          </View></TouchableNativeFeedback></View>}/>
                </View>
            </DrawerLayoutAndroid>
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
        drawerview: {
            backgroundColor: '#1E90FF',
            width: WINDOW_WIDTH,
            height: WINDOW_HIGHT,
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
        innerSize: {
            width: 30,
            height: 30,
            backgroundColor: '#ffffff'
        },
        listcolumn: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10,
            padding: 10,
            marginVertical: 10,
            backgroundColor: 'white',
            borderColor: '#dddddd',
            borderStyle: null,
            borderWidth: 0.5,
            borderRadius: 2,
            width: WINDOW_WIDTH - 30,
            height: 80,
        },
        testbar: {
            width: WINDOW_WIDTH,
            height: 60,
            backgroundColor: '#1E90FF',
        },
    })
    ;

AppRegistry.registerComponent('DemoProject', () => DemoProject);
