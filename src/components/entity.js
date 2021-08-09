/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from '../styles/entity-styles';

const Entity = props => {
  const {record} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() =>
        props.navigation.navigate('DetailedLogs', {record: record})
      }>
      <View style={styles.entity}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.text}>{record.carNumber}</Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text style={[styles.text, {fontSize: 15}]}>{record.date}</Text>
          <Text style={[styles.text, {fontSize: 15}]}>{record.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Entity;
