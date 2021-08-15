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

import styles from '../styles/vehicleDetails-styles';

const VehicleDetails = props => {
  const user = props.route.params.user;

  const {width, height} = Dimensions.get('screen');

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
        <Text style={{color: '#EEEBDD', fontSize: 40}}>VEHICLE DETAILS</Text>
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
            <Text style={styles.text}>
              NUMBER OF VEHICLES : {user.noOfVehicles}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#EEEBDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingVertical: height * 0.01,
              marginTop: height * 0.03,
            }}>
            <Text style={styles.text}>TYPES OF VEHICLES</Text>
            <Text
              style={[styles.text, {fontSize: 15, marginTop: height * 0.02}]}>
              TWO WHEELERS : 1
            </Text>
            <Text style={[styles.text, {fontSize: 15}]}>FOUR WHEELERS : 1</Text>
          </View>
          <View
            style={{
              backgroundColor: '#EEEBDD',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
              paddingHorizontal: width * 0.05,
              paddingVertical: height * 0.01,
              marginTop: height * 0.03,
            }}>
            <Text style={styles.text}>VEHICLE NO.:</Text>
            <Text
              style={[styles.text, {fontSize: 15, marginTop: height * 0.02}]}>
              TWO WHEEL : GJ-27-BB-3659
            </Text>
            <Text style={[styles.text, {fontSize: 15}]}>
              FOUR WHEEL : GJ-27-BB-3659
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default VehicleDetails;
