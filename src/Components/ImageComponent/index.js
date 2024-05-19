/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {Image, View} from 'react-native';

const ImageComponent = () => {
  return (
    // both Fragment and <> are same
    <Fragment>
      <>
        <View
          style={{
            // flex: 1,
            borderWidth: 2,
          }}>
          <Image
            style={{
              height: 60,
              width: 80,
            }}
            source={require('../../../assets/images/img.png')}
          />
          <Image
            style={{
              height: 40,
              width: 40,
              borderWidth: 1,
            }}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
      </>
    </Fragment>
  );
};

export default ImageComponent;
