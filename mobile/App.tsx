import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home/index'

export default function App() {
  return (
    <>
      {/* Componente que muda o estilo da barra de status */}
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />    
      <Home />
    </>
  );
}
