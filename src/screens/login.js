/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import axios from 'axios';

import styles from '../styles/login-styles';

const Login = props => {
  const {width} = Dimensions.get('screen');

  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  const checkCred = () => {
    console.log('Sending Data..');
    axios
      .post('https://offdutysecurity.herokuapp.com/login/', {
        username: user,
        password: pass,
      })
      .then(function (response) {
        if (JSON.parse(response.request.response).status === 'Logged In') {
          props.navigation.navigate('Dashboard', {
            user: JSON.parse(response.request.response).user,
          });
        }
        console.log(JSON.parse(response.request.response).status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
        <TextInput
          autoFocus={false}
          keyboardType="email-address"
          placeholder="USERNAME"
          placeholderTextColor="#444444A0"
          value={user}
          onChangeText={text => {
            setUser(text);
          }}
          style={styles.textInput}
        />
      </View>
      <View style={styles.field}>
        <TextInput
          autoFocus={false}
          secureTextEntry={true}
          placeholder="PASSWORD"
          placeholderTextColor="#444444A0"
          value={pass}
          onChangeText={text => {
            setPass(text);
          }}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity activeOpacity={0.5} onPress={checkCred}>
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
