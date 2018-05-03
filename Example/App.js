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

import { RNChipView } from 'react-native-chip-view'

import user from './assets/user.png'
import select from './assets/select.png'
import cancel from './assets/cancel.png'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <View style={styles.container}>
        <View style={{ height: 10 }}></View>
        <RNChipView
          title={'prscX'}
          avatar={false}
        />
        <RNChipView
          title={'prscX'}
        />
        <RNChipView
          title={'prscX'}
          avatar={user}
        />
        <RNChipView
          title={'prscX'}
          avatar={user}
          selectable={true}
        />
        <RNChipView
          title={'prscX'}
          avatar={user}
          cancelable={true}
        />
        <RNChipView
          title={'Pranav Raj Singh Chauhan'}
          avatar={false}
        />
        <RNChipView
          title={'Chauhan Raj Singh Pranav'}
        />
        <RNChipView
          title={'Pranav Raj Singh Chauhan'}
          avatar={user}
        />
        <RNChipView
          title={'Pranav Raj Singh Chauhan'}
          avatar={user}
          selectable={true}
        />
        <RNChipView
          title={'Pranav Raj Singh Chauhan'}
          avatar={user}
          cancelable={true}
        />
        <RNChipView
          title={'Pranav Raj Singh Chauhan, Pranav Raj Singh Chauhan'}
          avatar={user}
        />
        <RNChipView
          title={'Pranav Raj Singh Chauhan'}
          titleStyle={{
            color: '#000'
          }}
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
          maxWidth={500}
          height={100}
        />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
