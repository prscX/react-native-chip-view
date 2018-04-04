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

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <View style={styles.container}>
        <RNChipView
          title={'Pranav Chauhan'}
          titleStyle={{
            color: '#FFF'
          }}
          medium
          cancelable
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
