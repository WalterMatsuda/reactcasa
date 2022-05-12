import React from 'react';
import theme from './src/styles/theme';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { View } from 'react-native';
import Home from './src/screens/Home';
export default function App() {

  const [fontsLoaded] = useFonts({Poppins_700Bold,
  Poppins_400Regular});


    return (

Home()


    
    );
  }

