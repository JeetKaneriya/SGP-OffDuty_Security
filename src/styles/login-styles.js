/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#810000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#444444', fontSize: 15},
  field: {
    height: height * 0.06,
    width: width * 0.9,
    backgroundColor: '#EEEBDD',
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
