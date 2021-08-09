/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from '../styles/login-styles';

const Login = props => {
  const {width} = Dimensions.get('screen');

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#b40000', '#810000', '#4e0000']}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View
        style={{
          height: width / 2,
          width: width / 2,
          backgroundColor: '#EEEBDDa0',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Text style={{color: '#444444', fontSize: 20}}>LOGO</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.text}>USERNAME</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.text}>PASSWORD</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate('Dashboard')}>
        <View
          style={[
            styles.field,
            {
              borderWidth: 5,
              borderColor: '#1B1717',
              elevation: 10,
            },
          ]}>
          <Text style={styles.text}>LOGIN</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Login;
