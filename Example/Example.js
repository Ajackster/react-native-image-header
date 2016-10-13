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

export default Example;