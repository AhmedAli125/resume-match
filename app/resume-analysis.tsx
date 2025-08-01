import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ResumeAnalysisScreen() {
  const [selectedResume] = useState('John_Doe_Resume.pdf');
  const [jobDescription, setJobDescription] = useState('');
  const [saveAnalysis, setSaveAnalysis] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-6 py-4 border-b border-gray-100">
          <TouchableOpacity className="mr-4" onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Resume Analysis
          </Text>
        </View>

        <ScrollView className="flex-1 px-6 py-6">
          {/* Select Resume Section */}
          <View className="mb-6">
            <Text className="text-base font-medium text-gray-900 mb-3">
              Select Resume
            </Text>

            {/* Dropdown */}
            <TouchableOpacity className="bg-gray-50 rounded-xl px-4 py-4 flex-row items-center justify-between mb-4">
              <Text className="text-gray-700 text-base">{selectedResume}</Text>
              <IconSymbol name="chevron.down" size={20} color="#6B7280" />
            </TouchableOpacity>

            {/* Selected Resume Card */}
            <View className="bg-gray-50 rounded-xl p-4 flex-row items-center">
              <View className="w-10 h-10 bg-blue-100 rounded-xl items-center justify-center mr-4">
                <IconSymbol name="doc.text" size={20} color="#4285F4" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-900 font-medium text-base mb-1">
                  John_Doe_Resume.pdf
                </Text>
                <View className="flex-row items-center">
                  <IconSymbol name="clock" size={16} color="#9CA3AF" />
                  <Text className="text-gray-500 text-sm ml-1">
                    Uploaded 2 days ago • 2.4 MB
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Job Description Section */}
          <View className="mb-8">
            <Text className="text-base font-medium text-gray-900 mb-3">
              Job Description
            </Text>

            <View className="bg-gray-50 rounded-xl p-4 min-h-48">
              <TextInput
                placeholder="Paste job description here"
                placeholderTextColor="#9CA3AF"
                multiline
                textAlignVertical="top"
                className="flex-1 text-gray-700 text-base leading-6"
                value={jobDescription}
                onChangeText={setJobDescription}
                maxLength={5000}
              />
            </View>

            <Text className="text-gray-400 text-sm text-right mt-2">
              {jobDescription.length}/5000 characters
            </Text>
          </View>

          {/* Save Analysis Toggle */}
          <View className="flex-row items-center justify-between mb-8">
            <Text className="text-base font-medium text-gray-900">
              Save Analysis
            </Text>
            <Switch
              value={saveAnalysis}
              onValueChange={setSaveAnalysis}
              trackColor={{ false: '#E5E7EB', true: '#93C5FD' }}
              thumbColor={saveAnalysis ? '#4285F4' : '#F3F4F6'}
            />
          </View>
        </ScrollView>

        {/* Bottom Analyze Button */}
        <View className="px-6 pb-6">
          <TouchableOpacity className="bg-blue-500 rounded-2xl py-4 items-center">
            <Text className="text-white font-semibold text-lg">Analyze</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
