import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-6 pt-4">
        {/* Header Section */}
        <View className="mb-8">
          <Text className="text-2xl font-bold text-gray-900 mb-1">
            Hi, John
          </Text>
          <Text className="text-gray-600 text-base">Welcome back!</Text>
        </View>

        {/* Stats Cards */}
        <View className="flex-row mb-8 gap-4">
          <StatCard number="12" label="Resumes" icon="doc.text" />
          <StatCard number="8" label="Job Analyses" icon="chart.bar" />
        </View>

        {/* Quick Actions */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Quick Actions
          </Text>
          <View className="gap-3">
            <QuickActionItem
              icon="arrow.up.doc"
              text="Upload New Resume"
              iconColor="#4285F4"
            />
            <QuickActionItem
              icon="magnifyingglass"
              text="Start Job Analysis"
              iconColor="#4285F4"
            />
            <QuickActionItem
              icon="folder"
              text="View My Resumes"
              iconColor="#4285F4"
            />
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Recent Activity
          </Text>
          <View className="gap-4">
            <ActivityItem
              icon="magnifyingglass"
              title="Software Engineer position analyzed"
              subtitle="2 hours ago"
              iconColor="#4285F4"
            />
            <ActivityItem
              icon="arrow.up.doc"
              title="New resume uploaded"
              subtitle="Yesterday"
              iconColor="#4285F4"
            />
            <ActivityItem
              icon="mail"
              title="Cover letter generated"
              subtitle="2 days ago"
              iconColor="#4285F4"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: string;
}) {
  return (
    <View className="flex-1 bg-blue-50 rounded-xl p-4">
      <IconSymbol name={icon as any} size={20} color="#4285F4" />
      <Text className="text-2xl font-bold text-gray-900 mt-2 mb-1">
        {number}
      </Text>
      <Text className="text-gray-600 text-sm">{label}</Text>
    </View>
  );
}

function QuickActionItem({
  icon,
  text,
  iconColor,
}: {
  icon: string;
  text: string;
  iconColor: string;
}) {
  return (
    <TouchableOpacity className="bg-gray-50 rounded-xl p-4 flex-row items-center">
      <IconSymbol name={icon as any} size={24} color={iconColor} />
      <Text className="ml-4 text-gray-800 font-medium text-base">{text}</Text>
    </TouchableOpacity>
  );
}

function ActivityItem({
  icon,
  title,
  subtitle,
  iconColor,
}: {
  icon: string;
  title: string;
  subtitle: string;
  iconColor: string;
}) {
  return (
    <TouchableOpacity className="flex-row items-center py-3">
      <View className="w-10 h-10 bg-blue-50 rounded-full items-center justify-center mr-4">
        <IconSymbol name={icon as any} size={20} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="text-gray-900 font-medium text-base">{title}</Text>
        <Text className="text-gray-500 text-sm">{subtitle}</Text>
      </View>
      <IconSymbol name="chevron.right" size={16} color="#9CA3AF" />
    </TouchableOpacity>
  );
}
