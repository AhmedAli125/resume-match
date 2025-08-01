import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ResumePreviewScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-6 py-4 border-b border-gray-100">
          <TouchableOpacity className="mr-4" onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Resume Preview
          </Text>
        </View>

        <ScrollView className="flex-1 px-6 py-6">
          {/* Resume Preview Container */}
          <View className="bg-gray-50 rounded-2xl p-8 mb-8 items-center justify-center min-h-96">
            <View className="items-center">
              <IconSymbol name="doc.text" size={80} color="#9CA3AF" />
              <Text className="text-gray-500 font-medium text-lg mt-4">
                Resume Preview
              </Text>
            </View>
          </View>

          {/* File Information */}
          <View className="mb-8">
            <Text className="text-xl font-semibold text-gray-900 mb-2">
              John_Smith_Resume.pdf
            </Text>
            <Text className="text-gray-500 text-sm">
              Uploaded on May 15, 2023 • 245 KB
            </Text>
          </View>

          {/* Generate AI Cover Letter Button */}
          <TouchableOpacity
            className="flex-row items-center justify-between bg-gray-50 rounded-2xl p-4"
            onPress={() => router.push('/cover-letter-setup')}
          >
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-blue-100 rounded-xl items-center justify-center mr-4">
                <IconSymbol name="brain" size={20} color="#4285F4" />
              </View>
              <Text className="text-gray-900 font-medium text-base">
                Generate AI Cover Letter
              </Text>
            </View>
            <IconSymbol name="chevron.right" size={16} color="#9CA3AF" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
