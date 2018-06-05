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
import Icon from 'react-native-vector-icons/FontAwesome';

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
          avatar={user}
        />
        <RNChipView
          title={'prscX'}
        />
        <RNChipView
          title={'rpscX'}
          selectable={true}
        />
        <RNChipView
          title={'sprcX'}
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
          title={'Raj Pranav Singh Chauhan'}
        />
        <RNChipView
          title={'Singh Pranav Raj Chauhan'}
          avatar={<Icon name="search" size={40} color="#000" />}
          selectable={true}
          selectable={<Icon name="rocket" size={10} color="#900" />}
        />
        <RNChipView
          title={'A Pranav Raj Singh Chauhan'}
          cancelable={true}
          cancelable={<Icon name="save" size={10} color="#900" />}
        />
        <RNChipView
          title={'B Pranav Raj Singh Chauhan, Pranav Raj Singh Chauhan'}
          theme={1}
          ellipsizeMode={'tail'}
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
          borderRadius={10}
          onPress={() => {
            console.log('pressed')
          }}
          // containerStyle={{
          //   backgroundColor: "#000",
          // }}
          // contentContainerStyle={{
          //   flex: 1
          // }}
          // subContentContainerStyle={{
          //   flex: 1
          // }}
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
