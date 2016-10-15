# react-native-image-header
A cool scrollable header for react-native

![react-native-circular-action-menu demo](http://i.giphy.com/46Ct8tegBZMZi.gif)

### Installation
```bash
npm i react-native-image-header --save
```

### Usage

First, require it from your app's JavaScript files with:
```bash
import ImageHeader from 'react-native-image-header';
```

##### ImageHeader
`ImageHeader` component is the main component which wraps everything and provides a couple of props (see Config below).

### Example
_The following example can be found in `Example/Example.js`._

```js
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import ImageHeader from '../ImageHeader';

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
    marginHorizontal: 15
  },
  foregroundContainer: {
    width: Dimensions.get('window').width,
    height: 140,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoutButton: {
    position: 'absolute',
    top: 60,
    right: 15
  }
});

const backgroundImage = require('./backgroundImage.png');
const donaldDuck = require('./donaldduck.png');

const Example = () => {
  return (
    <ImageHeader
      backgroundImage={backgroundImage}
      headerChildren={
        <View style={styles.foregroundContainer}>
          <Image
            source={donaldDuck}
            style={styles.userImage}
            resizeMode="contain"
          />
          <View style={{ backgroundColor: 'transparent' }}>
            <Text style={{ color: '#FFF', fontSize: 23 }}>Donald Duck</Text>
            <Text style={{ color: '#FFF', fontSize: 20 }}>d.duck</Text>
          </View>
          <View style={styles.logoutButton}>
            <TouchableOpacity>
              <Text style={{ color: '#FFF', fontSize: 17 }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 600 }}>
        <Text>Content</Text>
      </View>
    </ImageHeader>
  )
};
```

### Configuration

##### ImageHeader:
| Property      | Type          | Default             | Description |
| ------------- |:-------------:|:------------:       | ----------- |
| backgroundImage | number      | null                | background image for the header
| maxHeight     | number        | 125                 | max height of the header
| minHeight     | number        | 80                  | min height of the header
| titleScale    | number        | 0.8                 | affects what the headerChildren scales down to
| children      | node/nodes    | null                | content for the actual view below the header.
| headerChildren| node/nodes    | null                | content that is seen in the header.
| statusBarTheme| string        | `default`           | must be `default` or `light-content`
| titleTranslateY | number      | -35                 | affects the translate of the headerChildren as the view is being scrolled up
| childrenBackgroundColor | string | "#FFF"           | background color of the content below the header.
