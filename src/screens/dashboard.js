/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StatusBar, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import styles from '../styles/dashboard-styles';

const Dashboard = props => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#b40000', '#810000', '#4e0000']}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate('Logs', {entities: []})}>
        <View style={styles.button}>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={'car-info'}
              size={60}
              color={'#1B1717'}
            />
          </View>
          <Text style={styles.text}>LOGS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() =>
          props.navigation.navigate('Profile', {user: props.route.params.user})
        }>
        <View style={styles.button}>
          <View style={styles.icon}>
            <FontAwesome5
              name={'user'}
              size={45}
              color={'#1B1717'}
              solid={true}
            />
          </View>
          <Text style={styles.text}>PROFILE</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Dashboard;
