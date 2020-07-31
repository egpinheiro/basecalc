import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../_Pages/HomeScreen';

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
);