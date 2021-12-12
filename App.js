import React from 'react';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import EStyleSheet from 'react-native-extended-stylesheet';
import NavStack from './src/routes/Stack';

EStyleSheet.build()

export default function App() {
  return (
    <>
      <NavStack />
    </>
  );
}
