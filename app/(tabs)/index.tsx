import { SafeAreaView } from 'react-native-safe-area-context';

import { Text, TouchableOpacity, View } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ThemedView className="flex-1 px-6 pt-16">
        {/* App Title */}
        <Text className="text-center text-3xl font-bold text-blue-500 mb-16">
          ResumeMatch
        </Text>

        {/* Welcome Section */}
        <View className="mb-12">
          <Text className="text-center text-2xl font-bold text-gray-900 mb-3">
            Welcome to
          </Text>
          <Text className="text-center text-2xl font-bold text-gray-900 mb-6">
            ResumeMatch
          </Text>
          <Text className="text-center text-gray-600 text-base leading-6">
            Your smart resume assistant for job applications
          </Text>
        </View>

        {/* Features List */}
        <View className="mb-12">
          <FeatureItem
            icon="brain"
            text="AI Resume Analysis"
            iconColor="#4285F4"
          />
          <FeatureItem
            icon="doc.text"
            text="Smart Cover Letters"
            iconColor="#4285F4"
          />
          <FeatureItem
            icon="envelope"
            text="Direct Gmail Integration"
            iconColor="#4285F4"
          />
        </View>

        {/* Google Sign In Button */}
        <TouchableOpacity className="bg-white border border-gray-300 rounded-xl py-4 px-6 flex-row items-center justify-center mb-6 shadow-sm">
          <IconSymbol name="globe" size={20} color="#4285F4" />
          <Text className="ml-3 text-gray-700 font-medium text-base">
            Continue with Google
          </Text>
        </TouchableOpacity>

        {/* Terms and Privacy */}
        <Text className="text-center text-gray-500 text-sm leading-5">
          By continuing, you agree to our{' '}
          <Text className="text-blue-500">Terms of Service</Text> and{' '}
          <Text className="text-blue-500">Privacy Policy</Text>
        </Text>

        {/* Bottom Indicator */}
        <View className="flex-1 justify-end pb-8">
          <View className="w-32 h-1 bg-black rounded-full self-center" />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

function FeatureItem({
  icon,
  text,
  iconColor,
}: {
  icon: string;
  text: string;
  iconColor: string;
}) {
  return (
    <View className="bg-gray-50 rounded-xl p-4 mb-3 flex-row items-center">
      <IconSymbol name={icon as any} size={24} color={iconColor} />
      <Text className="ml-4 text-gray-800 font-medium text-base">{text}</Text>
    </View>
  );
}
