import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ResumesScreen() {
  const resumes = [
    {
      id: 1,
      name: 'Software_Engineer_Resume.pdf',
      date: 'Jan 15, 2024',
      size: '2.4 MB',
    },
    {
      id: 2,
      name: 'Frontend_Developer_CV.pdf',
      date: 'Jan 10, 2024',
      size: '1.8 MB',
    },
    {
      id: 3,
      name: 'Technical_Lead_Profile.pdf',
      date: 'Jan 5, 2024',
      size: '3.1 MB',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-4">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-2xl font-bold text-gray-900">My Resumes</Text>
          <TouchableOpacity
            className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center"
            onPress={() => router.push('/upload-resume')}
          >
            <IconSymbol name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 flex-row items-center bg-gray-100 rounded-xl px-4 py-3 mr-3">
            <IconSymbol name="magnifyingglass" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search resumes..."
              className="flex-1 ml-3 text-gray-700"
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <TouchableOpacity className="w-12 h-12 bg-gray-100 rounded-xl items-center justify-center">
            <IconSymbol name="line.horizontal.3" size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Resume List */}
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {resumes.map(resume => (
            <ResumeItem key={resume.id} resume={resume} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function ResumeItem({
  resume,
}: {
  resume: { id: number; name: string; date: string; size: string };
}) {
  return (
    <TouchableOpacity className="flex-row items-center py-4 px-4 mb-3 bg-gray-50 rounded-xl">
      {/* File Icon */}
      <View className="w-12 h-12 bg-blue-100 rounded-xl items-center justify-center mr-4">
        <IconSymbol name="doc.text" size={24} color="#4285F4" />
      </View>

      {/* File Info */}
      <View className="flex-1">
        <Text className="text-gray-900 font-medium text-base mb-1">
          {resume.name}
        </Text>
        <Text className="text-gray-500 text-sm">
          {resume.date} • {resume.size}
        </Text>
      </View>

      {/* More Options */}
      <TouchableOpacity className="w-8 h-8 items-center justify-center">
        <IconSymbol name="ellipsis" size={20} color="#9CA3AF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
