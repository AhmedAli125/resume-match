import { SafeAreaView } from 'react-native-safe-area-context';

import { useState } from 'react';

import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ProfileScreen() {
  const [jobMatchAlerts, setJobMatchAlerts] = useState(true);
  const [coverLetterGeneration, setCoverLetterGeneration] = useState(true);
  const [emailSendNotifications, setEmailSendNotifications] = useState(false);

  const SettingsItem = ({
    icon,
    title,
    subtitle,
    onPress,
    showArrow = true,
  }: {
    icon: string;
    title: string;
    subtitle?: string;
    onPress?: () => void;
    showArrow?: boolean;
  }) => (
    <TouchableOpacity
      className="flex-row items-center py-4 px-6"
      onPress={onPress}
    >
      <IconSymbol name={icon as any} size={20} color="#374151" />
      <View className="flex-1 ml-4">
        <Text className="text-gray-900 font-medium text-base">{title}</Text>
        {subtitle && (
          <Text className="text-gray-500 text-sm mt-1">{subtitle}</Text>
        )}
      </View>
      {showArrow && (
        <IconSymbol name="chevron.right" size={16} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );

  const NotificationItem = ({
    title,
    value,
    onValueChange,
  }: {
    title: string;
    value: boolean;
    onValueChange: (value: boolean) => void;
  }) => (
    <View className="flex-row items-center justify-between py-4 px-6">
      <Text className="text-gray-900 font-medium text-base">{title}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#E5E7EB', true: '#3B82F6' }}
        thumbColor={value ? '#FFFFFF' : '#FFFFFF'}
      />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-6 py-4 bg-white border-b border-gray-100">
          <TouchableOpacity className="mr-4" onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Profile & Settings
          </Text>
        </View>

        <ScrollView className="flex-1">
          {/* User Profile Section */}
          <View className="bg-white px-6 py-6 mb-4">
            <View className="flex-row items-center">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face',
                }}
                className="w-16 h-16 rounded-full"
              />
              <View className="flex-1 ml-4">
                <Text className="text-xl font-bold text-gray-900">
                  Sarah Johnson
                </Text>
                <Text className="text-gray-600 text-base">
                  sarah.johnson@example.com
                </Text>
              </View>
              <TouchableOpacity>
                <IconSymbol
                  name="square.and.pencil"
                  size={20}
                  color="#3B82F6"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Account Settings */}
          <View className="bg-white mb-4">
            <Text className="text-gray-500 text-sm font-medium px-6 py-3 bg-gray-50">
              Account Settings
            </Text>
            <SettingsItem
              icon="xmark.circle"
              title="Change Password"
              onPress={() => {}}
            />
            <SettingsItem
              icon="envelope"
              title="Email Signature"
              onPress={() => {}}
            />
          </View>

          {/* Application Preferences */}
          <View className="bg-white mb-4">
            <Text className="text-gray-500 text-sm font-medium px-6 py-3 bg-gray-50">
              Application Preferences
            </Text>
            <SettingsItem
              icon="doc.text"
              title="Default Cover Letter Tone"
              subtitle="Professional"
              onPress={() => {}}
            />
            <SettingsItem
              icon="doc.text"
              title="Resume Analysis Settings"
              subtitle="Enabled"
              onPress={() => {}}
            />
            <SettingsItem
              icon="globe"
              title="Gmail Integration"
              subtitle="Connected"
              onPress={() => {}}
            />
          </View>

          {/* Notifications */}
          <View className="bg-white mb-4">
            <Text className="text-gray-500 text-sm font-medium px-6 py-3 bg-gray-50">
              Notifications
            </Text>
            <NotificationItem
              title="Job Match Alerts"
              value={jobMatchAlerts}
              onValueChange={setJobMatchAlerts}
            />
            <NotificationItem
              title="Cover Letter Generation"
              value={coverLetterGeneration}
              onValueChange={setCoverLetterGeneration}
            />
            <NotificationItem
              title="Email Send Notifications"
              value={emailSendNotifications}
              onValueChange={setEmailSendNotifications}
            />
          </View>

          {/* About */}
          <View className="bg-white mb-4">
            <Text className="text-gray-500 text-sm font-medium px-6 py-3 bg-gray-50">
              About
            </Text>
            <SettingsItem
              icon="lightbulb"
              title="App Version"
              subtitle="1.0.0"
              onPress={() => {}}
              showArrow={false}
            />
            <SettingsItem
              icon="doc.text"
              title="Terms of Service"
              onPress={() => {}}
            />
            <SettingsItem
              icon="doc.text"
              title="Privacy Policy"
              onPress={() => {}}
            />
            <SettingsItem
              icon="lightbulb"
              title="Help & Support"
              onPress={() => {}}
            />
          </View>

          {/* Sign Out */}
          <View className="px-6 py-4 mb-8">
            <TouchableOpacity className="flex-row items-center justify-center py-4">
              <IconSymbol name="xmark" size={16} color="#EF4444" />
              <Text className="text-red-500 font-medium text-base ml-2">
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
