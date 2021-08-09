/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  entity: {
    width: width * 0.95,
    height: height * 0.05,
    backgroundColor: '#EEEBDD',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: height * 0.03,
    marginBottom: 20,
    elevation: 10,
  },
  text: {color: '#444444', fontSize: 20},
});

export default styles;
