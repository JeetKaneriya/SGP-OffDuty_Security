/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Dimensions} from 'react-native';

import * as Animatable from 'react-native-animatable';

const Menu = props => {
  const {width, height} = Dimensions.get('screen');

  return (
    <Animatable.View
      animation="slideInRight"
      style={{
        backgroundColor: '#1B1717a0',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        position: 'absolute',
        zIndex: 1,
        left: width - width * 0.5,
        top: 0,
        elevation: 1,
      }}>
      <View
        style={{
          marginHorizontal: width * 0.1,
          marginVertical: height * 0.1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {props.children}
      </View>
    </Animatable.View>
  );
};

export default Menu;
