/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#810000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    height: width / 2,
    width: width / 2,
    backgroundColor: '#EEEBDDa0',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 20,
    elevation: 10,
  },
  text: {color: '#444444', fontSize: 20},
  icon: {
    backgroundColor: '#EEEBDD',
    borderRadius: 100,
    width: '50%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
