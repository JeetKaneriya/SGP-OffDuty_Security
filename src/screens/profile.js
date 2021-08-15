/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  PermissionsAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as ImagePicker from 'react-native-image-picker';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles/profile-styles';

const launchCam = async setImage => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission',
        message: 'OffDuty Security needs access to your device storage',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      var options = {
        storageOptions: {
          path: 'myCustomPath',
          waitUntilSaved: true,
          cameraRoll: true,
          skipBackup: true,
        },
        noData: true,
        saveToPhotos: true,
      };

      ImagePicker.launchCamera(options, response => {
        if (response.assets[0].uri !== undefined) {
          console.log(response);
          setImage(response.assets[0].uri);
        }
      });
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const launchGal = setImage => {
  var options = {
    storageOptions: {
      skipBackup: true,
      path: 'OffDutySecurity',
    },
  };

  ImagePicker.launchImageLibrary(options, response => {
    if (response.assets[0].uri !== undefined) {
      setImage(response.assets[0].uri);
    }
  });
};

const Profile = props => {
  const user = props.route.params.user;

  const {width, height} = Dimensions.get('screen');

  var userImg = '';

  if (user.pic !== undefined) {
    userImg = 'https://0f7ee737ce12.ngrok.io' + user.pic;
  } else {
    userImg =
      'https://cdn.iconscout.com/icon/free/png-512/user-circle-plus-3605378-3005458.png';
  }

  const [image, setImage] = React.useState(userImg);

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
        <Text style={{color: '#EEEBDD', fontSize: 50}}>PROFILE</Text>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={{uri: image}}
            style={{
              width: width / 3,
              height: width / 3,
              borderRadius: 20,
              marginBottom: height * 0.02,
              backgroundColor: '#EEEBDDa0',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => launchCam(setImage)}>
              <View
                style={{
                  width: width * 0.3,
                  height: height * 0.04,
                  backgroundColor: '#EEEBDD',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                }}>
                <Text style={styles.text}>CAMERA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => launchGal(setImage)}>
              <View
                style={{
                  width: width * 0.3,
                  height: height * 0.04,
                  backgroundColor: '#EEEBDD',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginLeft: width * 0.05,
                }}>
                <Text style={styles.text}>GALARY</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: width * 0.1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: width * 0.1,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#EEEBDD', fontSize: 20}}>Name : </Text>
            </View>
            <View
              style={{
                width: width * 0.6,
                height: height * 0.04,
                backgroundColor: '#EEEBDD',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.text}>{user.name}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: width * 0.1,
              marginTop: height * 0.02,
            }}>
            <View
              style={{
                width: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#EEEBDD', fontSize: 20}}>House No.: </Text>
            </View>
            <View
              style={{
                width: width * 0.6,
                height: height * 0.04,
                backgroundColor: '#EEEBDD',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.text}>{user.houseNo}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() =>
            props.navigation.navigate('VehicleDetails', {
              user: user,
            })
          }>
          <View
            style={{
              borderWidth: 5,
              borderColor: '#1B1717',
              elevation: 10,
              height: height * 0.06,
              width: width * 0.5,
              backgroundColor: '#EEEBDD',
              marginTop: 20,
              borderRadius: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>Vehicle Details</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default Profile;
