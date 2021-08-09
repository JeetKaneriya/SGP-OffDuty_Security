import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/screens/login';
import Dashboard from './src/screens/dashboard';
import Logs from './src/screens/logs';
import Profile from './src/screens/profile';
import DetailedLogs from './src/screens/detailedLogs';
import VehicleDetails from './src/screens/vehicleDetails';
import Filters from './src/screens/filters';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Logs" component={Logs} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="DetailedLogs" component={DetailedLogs} />
        <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
