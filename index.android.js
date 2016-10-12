/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Example from './Example/Example';

export default class ReactNativeHeader extends Component {
  render() {
    return (
      <Example />
    );
  }
}

AppRegistry.registerComponent('ReactNativeHeader', () => ReactNativeHeader);
