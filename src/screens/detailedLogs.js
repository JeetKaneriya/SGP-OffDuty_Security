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
import Menu from '../components/menu';

const DetailedLogs = props => {
  const {width, height} = Dimensions.get('screen');
  var record = props.route.params.record;

  const [menu, setMenu] = React.useState(false);
  const menuState = () => setMenu(previousState => !previousState);

  const onLogsPress = () => {
    menuState();
    props.navigation.navigate('Logs', {
      entities: [],
      user: props.route.params.user,
    });
  };

  const onProfilePress = () => {
    menuState();
    props.navigation.navigate('Profile', {user: props.route.params.user});
  };

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
            <TouchableOpacity activeOpacity={0.5} onPress={menuState}>
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
        {menu ? (
          <Menu {...props}>
            <TouchableOpacity activeOpacity={0.5} onPress={onLogsPress}>
              <View
                style={{
                  width: width * 0.3,
                  paddingVertical: height * 0.01,
                  backgroundColor: '#EEEBDD',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#444444', fontSize: 20}}>LOGS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={onProfilePress}>
              <View
                style={{
                  width: width * 0.3,
                  paddingVertical: height * 0.01,
                  backgroundColor: '#EEEBDD',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: height * 0.05,
                }}>
                <Text style={{color: '#444444', fontSize: 20}}>PROFILE</Text>
              </View>
            </TouchableOpacity>
          </Menu>
        ) : null}
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
            <Text style={styles.text}>CAR NUMBER : {record.carNo}</Text>
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
            <Text style={styles.text}>House No.: {record.houseNo}</Text>
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
            <Text style={styles.text}>Full Name : {record.name}</Text>
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
            <Text style={styles.text}>Mobile No.: {record.mobileNo}</Text>
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
