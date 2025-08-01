import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function CoverLetterSetupScreen() {
  const [selectedTone, setSelectedTone] = useState('Professional');
  const [additionalContext, setAdditionalContext] = useState('');

  const tones = [
    { id: 'professional', name: 'Professional', icon: 'briefcase' },
    { id: 'enthusiastic', name: 'Enthusiastic', icon: 'star' },
    { id: 'conversational', name: 'Conversational', icon: 'person' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-6 py-4 border-b border-gray-100">
          <TouchableOpacity className="mr-4" onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Cover Letter Setup
          </Text>
        </View>

        <ScrollView className="flex-1 px-6 py-6">
          {/* Selected Resume */}
          <View className="mb-8">
            <Text className="text-base font-medium text-gray-700 mb-4">
              Selected Resume
            </Text>
            <View className="bg-gray-50 rounded-xl p-4 flex-row items-center">
              <View className="w-10 h-10 bg-blue-100 rounded-xl items-center justify-center mr-4">
                <IconSymbol name="doc.text" size={20} color="#4285F4" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 font-medium text-base mb-1">
                  Software_Engineer_Resume.pdf
                </Text>
                <View className="flex-row items-center">
                  <IconSymbol name="clock" size={14} color="#9CA3AF" />
                  <Text className="text-gray-500 text-sm ml-1">
                    Modified 2 days ago
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Job Details */}
          <View className="mb-8">
            <Text className="text-base font-medium text-gray-700 mb-4">
              Job Details
            </Text>
            <View className="bg-gray-50 rounded-xl p-4">
              <Text className="text-lg font-bold text-gray-900 mb-1">
                Senior Frontend Developer
              </Text>
              <Text className="text-gray-600 mb-3">TechCorp Solutions</Text>
              <View className="bg-green-100 self-start rounded-full px-3 py-1">
                <Text className="text-green-700 font-semibold text-sm">
                  85% Match
                </Text>
              </View>
            </View>
          </View>

          {/* Select Tone */}
          <View className="mb-8">
            <Text className="text-base font-medium text-gray-700 mb-4">
              Select Tone
            </Text>
            <View className="flex-row gap-3">
              {tones.map(tone => (
                <ToneOption
                  key={tone.id}
                  tone={tone}
                  isSelected={selectedTone === tone.name}
                  onSelect={() => setSelectedTone(tone.name)}
                />
              ))}
            </View>
          </View>

          {/* Additional Context */}
          <View className="mb-8">
            <Text className="text-base font-medium text-gray-700 mb-4">
              Additional Context (Optional)
            </Text>
            <View className="bg-gray-50 rounded-xl p-4 min-h-24">
              <TextInput
                placeholder="Add any specific points you'd like to highlight..."
                placeholderTextColor="#9CA3AF"
                multiline
                textAlignVertical="top"
                className="flex-1 text-gray-700 text-base leading-6"
                value={additionalContext}
                onChangeText={setAdditionalContext}
              />
            </View>
          </View>
        </ScrollView>

        {/* Generate Button */}
        <View className="px-6 pb-6">
          <TouchableOpacity
            className="bg-blue-500 rounded-2xl py-4 items-center"
            onPress={() => router.push('/cover-letter')}
          >
            <Text className="text-white font-semibold text-lg">
              Generate Cover Letter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function ToneOption({
  tone,
  isSelected,
  onSelect,
}: {
  tone: { id: string; name: string; icon: string };
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <TouchableOpacity
      className={`flex-1 rounded-xl p-4 items-center ${
        isSelected ? 'bg-blue-500' : 'bg-gray-100'
      }`}
      onPress={onSelect}
    >
      <IconSymbol
        name={tone.icon as any}
        size={24}
        color={isSelected ? 'white' : '#6B7280'}
      />
      <Text
        className={`mt-2 font-medium text-sm ${
          isSelected ? 'text-white' : 'text-gray-700'
        }`}
      >
        {tone.name}
      </Text>
    </TouchableOpacity>
  );
}
