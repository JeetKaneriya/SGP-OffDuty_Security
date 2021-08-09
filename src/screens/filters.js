/* eslint-disable prettier/prettier */
/* eslint-disable radix */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Dimensions,
  Switch,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from '../styles/filters-styles';

const applyFilters = (
  entities,
  props,
  dateInput1,
  dateInput2,
  timeInput1,
  timeInput2,
  carInput,
  nameInput,
  houseInput1,
  houseInput2,
) => {
  if (dateInput1 && dateInput1) {
    var d1 = dateInput1.split('-');
    var d2 = dateInput2.split('-');
    var from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
    var to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);

    for (let i = 0; i < entities.length; i++) {
      var c = entities[i].date.split('-');
      var check = new Date(c[2], parseInt(c[1]) - 1, c[0]);
      if (!(check >= from && check <= to)) {
        entities[i].visibility = 0;
      }
    }
  }

  if (timeInput1 && timeInput2) {
    var [hour1, min1, sec1] = timeInput1.split(':');
    var [hour2, min2, sec2] = timeInput2.split(':');

    var from = new Date(1000, 1, 1, hour1, min1, sec1);
    var to = new Date(1000, 1, 1, hour2, min2, sec2);

    for (let i = 0; i < entities.length; i++) {
      var [hour, min, sec] = entities[i].time.split(':');
      var check = new Date(1000, 1, 1, hour, min, sec);
      if (!(check >= from && check <= to)) {
        entities[i].visibility = 0;
      }
    }
  }

  if (carInput) {
    for (let i = 0; i < entities.length; i++) {
      if (entities[i].carNumber.toLowerCase() !== carInput.toLowerCase()) {
        entities[i].visibility = 0;
      }
    }
  }

  if (nameInput) {
    for (let i = 0; i < entities.length; i++) {
      if (entities[i].fullName.toLowerCase() !== nameInput.toLowerCase()) {
        entities[i].visibility = 0;
      }
    }
  }

  if (houseInput2) {
    if (houseInput1) {
      for (let i = 0; i < entities.length; i++) {
        if (
          entities[i].blockNumber.toLowerCase() !== houseInput1.toLowerCase() &&
          entities[i].houseNumber !== houseInput2
        ) {
          entities[i].visibility = 0;
        }
      }
    } else {
      for (let i = 0; i < entities.length; i++) {
        if (entities[i].houseNumber !== houseInput2) {
          entities[i].visibility = 0;
        }
      }
    }
  }

  props.navigation.navigate('Logs', {entities: entities});
};

const clearFilters = (entities, props) => {
  for (let i = 0; i < entities.length; i++) {
    entities[i].visibility = 1;
  }
  props.navigation.navigate('Logs', {entities: entities});
};

const Filters = props => {
  const {width, height} = Dimensions.get('screen');
  const entities = props.route.params.entities;

  const [date, setDate] = React.useState(false);
  const Date = () => setDate(previousState => !previousState);
  const [time, setTime] = React.useState(false);
  const Time = () => setTime(previousState => !previousState);
  const [carNo, setCarNo] = React.useState(false);
  const CarNo = () => setCarNo(previousState => !previousState);
  const [name, setName] = React.useState(false);
  const Name = () => setName(previousState => !previousState);
  const [houseNo, setHouseNo] = React.useState(false);
  const HouseNo = () => setHouseNo(previousState => !previousState);

  const [dateInput1, setDateInput1] = React.useState('');
  const [dateInput2, setDateInput2] = React.useState('');

  const [timeInput1, setTimeInput1] = React.useState('');
  const [timeInput2, setTimeInput2] = React.useState('');

  const [carInput, setCarInput] = React.useState('');

  const [nameInput, setNameInput] = React.useState('');

  const [houseInput1, setHouseInput1] = React.useState('');
  const [houseInput2, setHouseInput2] = React.useState('');

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
        <View style={styles.card}>
          <Text style={[styles.text, {fontSize: 40}]}>FILTERS</Text>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={[
                styles.filter,
                {borderTopWidth: 2, borderTopColor: '#444444'},
              ]}>
              <View style={styles.filterTab}>
                <Text style={[styles.text, {fontSize: 17}]}>Date</Text>
                <Switch
                  trackColor={{false: '#444444a0', true: '#810000a0'}}
                  thumbColor={date ? '#810000' : '#444444'}
                  onValueChange={Date}
                  value={date}
                />
              </View>
              {date ? (
                <View style={styles.filterContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[styles.text, {fontSize: 13}]}>From </Text>
                    <TextInput
                      autoFocus={false}
                      placeholder="DD-MM-YYYY"
                      placeholderTextColor="#444444A0"
                      onChangeText={text => {
                        setDateInput1(text);
                      }}
                      style={{
                        width: width * 0.26,
                        height: height * 0.045,
                        color: '#444444',
                        fontSize: 13,
                        borderWidth: 1,
                        borderColor: '#444444',
                        borderRadius: 20,
                        paddingHorizontal: width * 0.02,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[styles.text, {fontSize: 13}]}>To </Text>
                    <TextInput
                      autoFocus={false}
                      placeholder="DD-MM-YYYY"
                      placeholderTextColor="#444444A0"
                      onChangeText={text => {
                        setDateInput2(text);
                      }}
                      style={{
                        width: width * 0.26,
                        height: height * 0.045,
                        color: '#444444',
                        fontSize: 13,
                        borderWidth: 1,
                        borderColor: '#444444',
                        borderRadius: 20,
                        paddingHorizontal: width * 0.02,
                      }}
                    />
                  </View>
                </View>
              ) : null}
            </View>
            <View style={styles.filter}>
              <View style={styles.filterTab}>
                <Text style={[styles.text, {fontSize: 17}]}>Time</Text>
                <Switch
                  trackColor={{false: '#444444a0', true: '#810000a0'}}
                  thumbColor={time ? '#810000' : '#444444'}
                  onValueChange={Time}
                  value={time}
                />
              </View>
              {time ? (
                <View style={styles.filterContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[styles.text, {fontSize: 13}]}>From </Text>
                    <TextInput
                      autoFocus={false}
                      placeholder="HH:MM:SS(24)"
                      placeholderTextColor="#444444A0"
                      onChangeText={text => {
                        setTimeInput1(text);
                      }}
                      style={{
                        width: width * 0.27,
                        height: height * 0.045,
                        color: '#444444',
                        fontSize: 13,
                        borderWidth: 1,
                        borderColor: '#444444',
                        borderRadius: 20,
                        paddingHorizontal: width * 0.02,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[styles.text, {fontSize: 13}]}>To </Text>
                    <TextInput
                      autoFocus={false}
                      placeholder="HH:MM:SS(24)"
                      placeholderTextColor="#444444A0"
                      onChangeText={text => {
                        setTimeInput2(text);
                      }}
                      style={{
                        width: width * 0.27,
                        height: height * 0.045,
                        color: '#444444',
                        fontSize: 13,
                        borderWidth: 1,
                        borderColor: '#444444',
                        borderRadius: 20,
                        paddingHorizontal: width * 0.02,
                      }}
                    />
                  </View>
                </View>
              ) : null}
            </View>
            <View style={styles.filter}>
              <View style={styles.filterTab}>
                <Text style={[styles.text, {fontSize: 17}]}>Car Number</Text>
                <Switch
                  trackColor={{false: '#444444a0', true: '#810000a0'}}
                  thumbColor={carNo ? '#810000' : '#444444'}
                  onValueChange={CarNo}
                  value={carNo}
                />
              </View>
              {carNo ? (
                <View style={styles.filterContent}>
                  <TextInput
                    autoFocus={false}
                    placeholder="Enter Car Number : GJ-27-BB-3659"
                    placeholderTextColor="#444444A0"
                    onChangeText={text => {
                      setCarInput(text);
                    }}
                    style={{
                      width: width * 0.7,
                      height: height * 0.045,
                      color: '#444444',
                      fontSize: 13,
                      borderWidth: 1,
                      borderColor: '#444444',
                      borderRadius: 20,
                      paddingHorizontal: width * 0.02,
                    }}
                  />
                </View>
              ) : null}
            </View>
            <View style={styles.filter}>
              <View style={styles.filterTab}>
                <Text style={[styles.text, {fontSize: 17}]}>
                  Name of the resident
                </Text>
                <Switch
                  trackColor={{false: '#444444a0', true: '#810000a0'}}
                  thumbColor={name ? '#810000' : '#444444'}
                  onValueChange={Name}
                  value={name}
                />
              </View>
              {name ? (
                <View style={styles.filterContent}>
                  <TextInput
                    autoFocus={false}
                    placeholder="Enter Fullname of Resident : Jeet Kaneriya"
                    placeholderTextColor="#444444A0"
                    onChangeText={text => {
                      setNameInput(text);
                    }}
                    style={{
                      width: width * 0.7,
                      height: height * 0.045,
                      color: '#444444',
                      fontSize: 13,
                      borderWidth: 1,
                      borderColor: '#444444',
                      borderRadius: 20,
                      paddingHorizontal: width * 0.02,
                    }}
                  />
                </View>
              ) : null}
            </View>
            <View style={styles.filter}>
              <View style={styles.filterTab}>
                <Text style={[styles.text, {fontSize: 17}]}>
                  House no. of the resident
                </Text>
                <Switch
                  trackColor={{false: '#444444a0', true: '#810000a0'}}
                  thumbColor={houseNo ? '#810000' : '#444444'}
                  onValueChange={HouseNo}
                  value={houseNo}
                />
              </View>
              {houseNo ? (
                <View style={styles.filterContent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[styles.text, {fontSize: 13}]}>Block No.</Text>
                    <TextInput
                      autoFocus={false}
                      placeholder="(Optional)"
                      placeholderTextColor="#444444A0"
                      onChangeText={text => {
                        setHouseInput1(text);
                      }}
                      style={{
                        width: width * 0.2,
                        height: height * 0.045,
                        color: '#444444',
                        fontSize: 13,
                        borderWidth: 1,
                        borderColor: '#444444',
                        borderRadius: 20,
                        paddingHorizontal: width * 0.02,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[styles.text, {fontSize: 13}]}>House No.</Text>
                    <TextInput
                      autoFocus={false}
                      placeholder="603"
                      placeholderTextColor="#444444A0"
                      onChangeText={text => {
                        setHouseInput2(text);
                      }}
                      style={{
                        width: width * 0.15,
                        height: height * 0.045,
                        color: '#444444',
                        fontSize: 13,
                        borderWidth: 1,
                        borderColor: '#444444',
                        borderRadius: 20,
                        paddingHorizontal: width * 0.02,
                      }}
                    />
                  </View>
                </View>
              ) : null}
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: width * 0.75,
            }}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                applyFilters(
                  entities,
                  props,
                  dateInput1,
                  dateInput2,
                  timeInput1,
                  timeInput2,
                  carInput,
                  nameInput,
                  houseInput1,
                  houseInput2,
                )
              }>
              <View
                style={{
                  borderWidth: 5,
                  borderColor: '#1B1717',
                  elevation: 10,
                  height: height * 0.06,
                  width: width * 0.3,
                  backgroundColor: '#EEEBDD',
                  marginTop: 20,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[styles.text, {fontSize: 15}]}>Apply Filters</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => clearFilters(entities, props)}>
              <View
                style={{
                  borderWidth: 5,
                  borderColor: '#1B1717',
                  elevation: 10,
                  height: height * 0.06,
                  width: width * 0.3,
                  backgroundColor: '#EEEBDD',
                  marginTop: 20,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={[styles.text, {fontSize: 15}]}>Clear Filters</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Filters;
