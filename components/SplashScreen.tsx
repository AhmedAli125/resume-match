import React, { useEffect, useRef } from 'react';

import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Text,
  View,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate in the logo
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate progress bar
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      if (onComplete) {
        setTimeout(onComplete, 500);
      }
    });
  }, [fadeAnim, scaleAnim, progressAnim, onComplete]);

  return (
    <LinearGradient
      colors={['#667eea', '#764ba2']}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
      }}
    >
      {/* Document Icon with Checkmark */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
          marginBottom: 40,
          position: 'relative',
        }}
      >
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 24,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          <Ionicons name="document-text-outline" size={60} color="white" />
        </View>

        {/* Checkmark Badge */}
        <View
          style={{
            position: 'absolute',
            bottom: -5,
            right: -5,
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: '#4CAF50',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 3,
            borderColor: 'white',
          }}
        >
          <Ionicons name="checkmark" size={20} color="white" />
        </View>
      </Animated.View>

      {/* App Title */}
      <Animated.View style={{ opacity: fadeAnim, alignItems: 'center' }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 8,
            textAlign: 'center',
          }}
        >
          ResumeMatch
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            lineHeight: 22,
            marginBottom: 60,
          }}
        >
          Smart Resume Analysis & Job{'\n'}Applications
        </Text>
      </Animated.View>

      {/* Loading Spinner */}
      <Animated.View style={{ opacity: fadeAnim, marginBottom: 40 }}>
        <ActivityIndicator size="large" color="white" />
      </Animated.View>

      {/* Progress Bar */}
      <Animated.View
        style={{
          opacity: fadeAnim,
          width: width - 80,
          height: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Animated.View
          style={{
            height: '100%',
            backgroundColor: 'white',
            borderRadius: 2,
            width: progressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%'],
            }),
          }}
        />
      </Animated.View>
    </LinearGradient>
  );
}
