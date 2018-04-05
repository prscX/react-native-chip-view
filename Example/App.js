/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNChipView from 'react-native-chip-view'

import user from './assets/user.png'
import select from './assets/select.png'
import cancel from './assets/cancel.png'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <View style={styles.container}>
        <RNChipView
          title={'Pranav'}
          titleStyle={{
            color: '#000'
          }}
          medium
          avatar={false}
          avatar={user}
          cancelable={false}
          cancelable={cancel}
          cancelable={true}
          // cancelableStyle={{
          //   backgroundColor: '#767676'
          // }}
          selectable={false}
          selectable={select}
          selectable={false}
          // selectableStyle={{
          //   backgroundColor: '#767676'
          // }}
          // backgroundColor={'#F1F1F1'}
        ></RNChipView>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
