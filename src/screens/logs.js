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

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from '../styles/logs-styles';
import Entity from '../components/entity';
import entities from '../components/data';

const Logs = props => {
  const {width} = Dimensions.get('screen');
  const filEntities = [];

  if (props.route.params.entities.length > 0) {
    entities.splice(0, entities.length, ...props.route.params.entities);
  }

  for (let i = 0; i < entities.length; i++) {
    if (entities[i].visibility === 1) {
      filEntities.push(entities[i]);
    }
  }

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
                props.navigation.navigate('Filters', {entities: entities})
              }>
              <AntDesign name={'filter'} size={30} color={'#EEEBDD'} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
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
        <FlatList
          data={filEntities}
          renderItem={({item}) => <Entity {...props} record={item} />}
          showsVerticalScrollIndicator={false}
          initialNumToRender={12}
        />
      </LinearGradient>
    </View>
  );
};

export default Logs;
