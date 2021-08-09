/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: width,
    height: height * 0.13,
    backgroundColor: '#1B1717',
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: height * 0.04,
    paddingHorizontal: width * 0.05,
  },
  logo: {
    width: width * 0.3,
    height: '100%',
    backgroundColor: '#EEEBDD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#444444', fontSize: 20},
  subContainer: {
    backgroundColor: '#810000',
    width: width,
    height: height * 0.87,
    alignItems: 'center',
    paddingVertical: height * 0.02,
  },
});

export default styles;
