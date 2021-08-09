/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles/detailedLogs-styles';

const DetailedLogs = props => {
  const {width, height} = Dimensions.get('screen');
  var record = props.route.params.record;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logo}>
            <Text style={styles.text}>LOGO</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity activeOpacity={0.5}>
              <Ionicons name={'ios-menu-outline'} size={40} color={'#EEEBDD'} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => props.navigation.navigate('Login')}>
              <MaterialIcons
                name={'logout'}
                size={30}
                color={'#EEEBDD'}
                style={{marginLeft: width * 0.03}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['#b40000', '#810000', '#4e0000']}
        style={styles.subContainer}>
        <View style={styles.button}>
          <View style={styles.icon} />
        </View>
        <View>
          <View
            style={{
              backgroundColor: '#EEEBDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingVertical: height * 0.02,
            }}>
            <Text style={styles.text}>CAR NUMBER : {record.carNumber}</Text>
          </View>
          <View
            style={{
              backgroundColor: '#EEEBDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingVertical: height * 0.01,
              marginTop: height * 0.02,
            }}>
            <Text style={styles.text}>House No.: {record.houseNumber}</Text>
          </View>
          <View
            style={{
              backgroundColor: '#EEEBDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingVertical: height * 0.01,
              marginTop: height * 0.02,
            }}>
            <Text style={styles.text}>Full Name : {record.fullName}</Text>
          </View>
          <View
            style={{
              backgroundColor: '#EEEBDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingVertical: height * 0.01,
              marginTop: height * 0.02,
            }}>
            <Text style={styles.text}>Mobile No.: {record.mobileNumber}</Text>
          </View>
          <View
            style={{
              backgroundColor: '#EEEBDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingVertical: height * 0.01,
              marginTop: height * 0.02,
            }}>
            <Text style={styles.text}>
              Vehicle Class : {record.vehicleClass}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default DetailedLogs;
