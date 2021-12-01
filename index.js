import React from 'react';
import 'react-native-gesture-handler';

import { registerRootComponent } from 'expo';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper'; 

import { colors } from './src/global/styles/theme.json';

import {
    useFonts,
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  } from '@expo-google-fonts/inter';

import Tour from './src/pages/Tour';
import Login from './src/pages/Login';
import Home from './src/pages/Home';

const App = () => {
    let [fontsLoaded] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
      });

      if (!fontsLoaded) {
          //splash screen here
          return null;
      }

    return (
        <ThemeProvider theme={colors}>
            <PaperProvider>
                <Home />
            </PaperProvider>
        </ThemeProvider>
    )
}


registerRootComponent(App);
