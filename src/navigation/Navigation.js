import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import VideoScreen from '../screens/VideoScreen';
import DownloadVideo from '../screens/DownloadVideo';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Video" component={VideoScreen} />
        <Stack.Screen name="Download" component={DownloadVideo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
