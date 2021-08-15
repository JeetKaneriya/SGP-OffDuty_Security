/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import axios from 'axios';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from '../styles/logs-styles';
import Entity from '../components/entity';
import Menu from '../components/menu';

const Logs = props => {
  const {width, height} = Dimensions.get('screen');
  var filEntities = [];
  const [entities, setEntities] = React.useState([]);
  console.log(props.route.params.user);

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

  axios
    .get('https://1bd7e1c69a8d.ngrok.io/feed/')
    .then(function (response) {
      setEntities(JSON.parse(response.request.response).entities);
    })
    .catch(function (error) {
      console.log(error);
    });

  if (props.route.params.entities.length > 0) {
    entities.splice(0, entities.length, ...props.route.params.entities);
  }

  for (let i = 0; i < entities.length; i++) {
    if (entities[i].visibility === 1) {
      filEntities.push(entities[i]);
    }
  }

  filEntities = [].concat(filEntities).reverse();

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
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                props.navigation.navigate('Filters', {
                  entities: entities,
                  user: props.route.params.user,
                })
              }>
              <AntDesign name={'filter'} size={30} color={'#EEEBDD'} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={menuState}>
              <Ionicons
                name={'ios-menu-outline'}
                size={44}
                color={'#EEEBDD'}
                style={{marginLeft: width * 0.03}}
              />
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
        <FlatList
          data={filEntities}
          renderItem={({item}) => (
            <Entity {...props} record={item} user={props.route.params.user} />
          )}
          showsVerticalScrollIndicator={false}
          initialNumToRender={12}
        />
      </LinearGradient>
    </View>
  );
};

export default Logs;
