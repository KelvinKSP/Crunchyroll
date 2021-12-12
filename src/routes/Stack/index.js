import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../../pages/Home";
import Login from "../../pages/Login";

const Stack = createNativeStackNavigator();

export default function NavStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="Login"
                    component={Login}                   
                />
                <Stack.Screen 
                    name="Home"
                    component={Home}                   
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}