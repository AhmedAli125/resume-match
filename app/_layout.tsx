import 'react-native-reanimated';

import React, { useState } from 'react';

import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';

import SplashScreen from '@/components/SplashScreen';
import { useColorScheme } from '@/hooks/useColorScheme';

import '../global.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="upload-resume"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="resume-preview"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="resume-analysis"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="analysis-results"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cover-letter-setup"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cover-letter"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="send-resume"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
