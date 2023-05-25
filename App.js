import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { NumericKeyboard } from './src/telas/NumericKeyboard'
import Cesta from './src/telas/Cesta';


export default function App() {
  return (
    // <SafeAreaView>
    <>
      <StatusBar />
      <Cesta />
    </>
    // </SafeAreaView>
  );
}
