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

export default function SendResumeScreen() {
  const [recipientEmail, setRecipientEmail] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4 border-b border-gray-100">
          <TouchableOpacity onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Send Resume
          </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <IconSymbol name="xmark" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1 px-6 py-6">
          {/* To Field */}
          <View className="mb-6">
            <Text className="text-base font-medium text-gray-700 mb-3">To</Text>
            <View className="bg-gray-50 rounded-xl p-4 flex-row items-center">
              <IconSymbol name="envelope" size={20} color="#9CA3AF" />
              <TextInput
                placeholder="Enter recipient email"
                placeholderTextColor="#9CA3AF"
                className="flex-1 ml-3 text-gray-700 text-base"
                value={recipientEmail}
                onChangeText={setRecipientEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
          </View>

          {/* Subject Field */}
          <View className="mb-6">
            <Text className="text-base font-medium text-gray-700 mb-3">
              Subject
            </Text>
            <View className="bg-gray-50 rounded-xl p-4">
              <Text className="text-gray-700 text-base">
                Application for Senior Frontend Developer Position
              </Text>
            </View>
          </View>

          {/* Resume Match Score */}
          <View className="bg-blue-50 rounded-2xl p-6 mb-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-sm text-gray-600 mb-1">
                  Resume Match Score
                </Text>
                <Text className="text-3xl font-bold text-blue-600 mb-2">
                  85%
                </Text>
                <Text className="text-blue-600 font-medium">Strong Match</Text>
              </View>
              <View className="w-16 h-16">
                <CircularProgress percentage={85} />
              </View>
            </View>
          </View>

          {/* Cover Letter */}
          <View className="mb-6">
            <Text className="text-base font-medium text-gray-700 mb-3">
              Cover Letter
            </Text>
            <View className="bg-gray-50 rounded-xl p-4">
              <Text className="text-gray-700 text-base leading-6">
                Dear Hiring Manager,{'\n\n'}I am writing to express my strong
                interest in the Senior Frontend Developer position at your
                company. With over 5 years of experience in frontend development
                and a proven track record of building scalable web applications,
                I believe I would be a valuable addition to your team.{'\n\n'}I
                have reviewed the job description and am confident that my
                skills and experience align well with the requirements. I am
                particularly excited about the opportunity to work with React
                and modern frontend technologies.{'\n\n'}Thank you for
                considering my application. I look forward to discussing how I
                can contribute to your team&apos;s success.{'\n\n'}Best regards,
                {'\n'}[Your Name]
              </Text>
            </View>
          </View>

          {/* Attachment */}
          <View className="mb-8">
            <View className="bg-gray-50 rounded-2xl p-4 flex-row items-center">
              <View className="w-12 h-12 bg-gray-200 rounded-full items-center justify-center">
                <Text className="text-gray-600 text-lg font-medium">PDF</Text>
              </View>
              <View className="flex-1 ml-4">
                <Text className="text-gray-900 font-medium text-base">
                  John_Smith_Resume.pdf
                </Text>
                <Text className="text-gray-500 text-sm">245 KB</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Send Button */}
        <View className="px-6 pb-6">
          <TouchableOpacity className="bg-blue-500 rounded-2xl py-4 items-center">
            <Text className="text-white font-semibold text-lg">Send Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function CircularProgress({ percentage }: { percentage: number }) {
  return (
    <View className="w-16 h-16 items-center justify-center">
      <View className="w-16 h-16 rounded-full border-4 border-blue-500 items-center justify-center">
        <Text className="text-sm font-bold text-blue-500">{percentage}%</Text>
      </View>
    </View>
  );
}
