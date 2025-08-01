import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

const coverLetterData = [
  {
    id: '1',
    jobTitle: 'Senior Frontend Developer at Tech Corp',
    date: 'Jan 15, 2024',
    tone: 'Professional',
  },
  {
    id: '2',
    jobTitle: 'UX Designer at Design Studio',
    date: 'Jan 14, 2024',
    tone: 'Creative',
  },
  {
    id: '3',
    jobTitle: 'Product Manager at Innovation Labs',
    date: 'Jan 12, 2024',
    tone: 'Business',
  },
  {
    id: '4',
    jobTitle: 'Software Engineer at Startup Inc',
    date: 'Jan 10, 2024',
    tone: 'Technical',
  },
  {
    id: '5',
    jobTitle: 'Full Stack Developer at Web Solutions',
    date: 'Jan 8, 2024',
    tone: 'Professional',
  },
];

export default function CoverLettersScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const getToneIcon = (tone: string) => {
    switch (tone) {
      case 'Professional':
        return 'briefcase';
      case 'Creative':
        return 'lightbulb';
      case 'Business':
        return 'chart.bar';
      case 'Technical':
        return 'chevron.left.forwardslash.chevron.right';
      default:
        return 'briefcase';
    }
  };

  const renderCoverLetterCard = ({
    item,
  }: {
    item: (typeof coverLetterData)[0];
  }) => (
    <View className="bg-white mx-4 mb-4 rounded-2xl p-6 border border-gray-100">
      {/* Job Title and Date */}
      <View className="mb-4">
        <Text className="text-lg font-bold text-gray-900 mb-2">
          {item.jobTitle}
        </Text>
        <View className="flex-row items-center">
          <Text className="text-gray-500 text-sm mr-4">{item.date}</Text>
          <View className="flex-row items-center">
            <IconSymbol
              name={getToneIcon(item.tone) as any}
              size={16}
              color="#6B7280"
            />
            <Text className="text-gray-500 text-sm ml-1">{item.tone}</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center gap-4">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => router.push('/cover-letter')}
        >
          <IconSymbol name="eye" size={16} color="#3B82F6" />
          <Text className="text-blue-500 font-medium ml-1">View</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <IconSymbol name="square.and.pencil" size={16} color="#3B82F6" />
          <Text className="text-blue-500 font-medium ml-1">Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => router.push('/send-resume')}
        >
          <IconSymbol name="paperplane.fill" size={16} color="#3B82F6" />
          <Text className="text-blue-500 font-medium ml-1">Send</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center">
          <IconSymbol name="trash" size={16} color="#EF4444" />
          <Text className="text-red-500 font-medium ml-1">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        {/* Header */}
        <View className="px-6 py-4 bg-white border-b border-gray-100">
          <Text className="text-2xl font-bold text-gray-900">
            Saved Cover Letters
          </Text>
        </View>

        {/* Search Bar */}
        <View className="bg-white px-6 py-4 border-b border-gray-100">
          <View className="bg-gray-50 rounded-xl p-3 flex-row items-center">
            <IconSymbol name="magnifyingglass" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search cover letters..."
              placeholderTextColor="#9CA3AF"
              className="flex-1 ml-3 text-gray-700 text-base"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Cover Letters List */}
        <FlatList
          data={coverLetterData}
          renderItem={renderCoverLetterCard}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
