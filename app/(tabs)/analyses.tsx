import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

const analysisData = [
  {
    id: '1',
    jobTitle: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    fileName: 'Resume_2024.docx',
    matchPercentage: 92,
    date: 'Today, 2:30 PM',
  },
  {
    id: '2',
    jobTitle: 'UI/UX Designer',
    company: 'Creative Studio',
    fileName: 'Portfolio_2024.pdf',
    matchPercentage: 85,
    date: 'Yesterday',
  },
  {
    id: '3',
    jobTitle: 'Product Manager',
    company: 'Innovation Labs',
    fileName: 'Resume_PM.pdf',
    matchPercentage: 78,
    date: 'Jan 15, 2024',
  },
];

const filterTabs = ['All History', 'High Matches', 'Recent', 'Weak'];

export default function AnalysesScreen() {
  const [selectedTab, setSelectedTab] = useState('All History');
  const [searchQuery, setSearchQuery] = useState('');

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return 'text-green-600';
    if (percentage >= 80) return 'text-blue-600';
    return 'text-orange-600';
  };

  const renderAnalysisCard = ({ item }: { item: (typeof analysisData)[0] }) => (
    <View className="bg-white mx-4 mb-4 rounded-2xl p-6 border border-gray-100">
      {/* Job Info and Date */}
      <View className="flex-row justify-between items-start mb-4">
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-900 mb-1">
            {item.jobTitle}
          </Text>
          <Text className="text-gray-600 text-base">{item.company}</Text>
        </View>
        <Text className="text-gray-500 text-sm">{item.date}</Text>
      </View>

      {/* Resume File and Match Percentage */}
      <View className="flex-row items-center justify-between mb-4">
        <View className="flex-row items-center flex-1">
          <IconSymbol name="doc.text" size={20} color="#4285F4" />
          <Text className="ml-2 text-gray-700 text-base">{item.fileName}</Text>
        </View>
        <Text
          className={`font-bold text-lg ${getMatchColor(item.matchPercentage)}`}
        >
          {item.matchPercentage}%
        </Text>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center justify-between">
        <TouchableOpacity
          className="bg-blue-500 rounded-2xl py-3 px-8 flex-1 mr-3"
          onPress={() => router.push('/analysis-results')}
        >
          <Text className="text-white font-semibold text-center">
            View Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-3">
          <IconSymbol name="trash" size={20} color="#EF4444" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
          <Text className="text-2xl font-bold text-gray-900">
            Analysis History
          </Text>
          <TouchableOpacity>
            <IconSymbol name="magnifyingglass" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Filter Tabs */}
        <View className="bg-white border-b border-gray-100">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="px-6 py-4"
          >
            <View className="flex-row gap-4">
              {filterTabs.map(tab => (
                <TouchableOpacity
                  key={tab}
                  className={`px-4 py-2 rounded-full ${
                    selectedTab === tab ? 'bg-blue-500' : 'bg-gray-100'
                  }`}
                  onPress={() => setSelectedTab(tab)}
                >
                  <Text
                    className={`font-medium ${
                      selectedTab === tab ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    {tab}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Search and Sort */}
        <View className="bg-white px-6 py-4 border-b border-gray-100">
          <View className="flex-row items-center gap-4">
            <View className="flex-1 bg-gray-50 rounded-xl p-3 flex-row items-center">
              <IconSymbol name="magnifyingglass" size={20} color="#9CA3AF" />
              <TextInput
                placeholder="Search analyses..."
                placeholderTextColor="#9CA3AF"
                className="flex-1 ml-3 text-gray-700 text-base"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
            <TouchableOpacity className="bg-gray-50 rounded-xl p-3 flex-row items-center">
              <IconSymbol name="line.horizontal.3" size={20} color="#374151" />
              <Text className="ml-2 text-gray-700 font-medium">Sort</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Analysis History List */}
        <FlatList
          data={analysisData}
          renderItem={renderAnalysisCard}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingTop: 16, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}
