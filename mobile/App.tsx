import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

{/* Add fonts do google */}
import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import Home from './src/pages/Home/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded) {
    {/* Habilitando loader enquanto fontes não estejam carregadas */}
    return <AppLoading />
  }

  return (
    <>
      {/* Componente que muda o estilo da barra de status */}
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />    
      <Home />
    </>
  );
}
