import React from 'react';
import Stacks from './app/navigation/stacks.js';
import WebCache from './app/web/global/WebCache.js';

import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'

import Styles from './app/styles/launchstyle';

// import firebase from 'react-native-firebase';

class VerifyScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

componentDidMount = () => {
   
}


  _bootstrapAsync = async () => {
    

    const getselectedlang= await WebCache.getdatacache('selectedlang');

    if (getselectedlang == null || getselectedlang == 'undefined') {
      const setselectedlang= await WebCache.setdatacache('selectedlang','ro');
    }

    const selectedtheme= await WebCache.getdatacache('selectedtheme');

    if (selectedtheme == null || selectedtheme == 'undefined') {
      const gselectedtheme= await WebCache.setdatacache('selectedtheme','light');
    }

      this.props.navigation.navigate('AppLaunch'); 
 
  };

  render() {
    return (
      <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={Styles.scrollView}>


           
          </ScrollView>
        </SafeAreaView>
    </>

    );
  }
}


const BottomStack = Stacks.getHomeStackbotom();

export default createAppContainer(createSwitchNavigator(
  {
    AppVerify: VerifyScreen,
    AppLaunch: BottomStack,
  },
  {
    initialRouteName: 'AppVerify',
  }
));




