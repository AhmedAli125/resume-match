import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function CoverLetterScreen() {
  const coverLetterText = `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Frontend Developer position at TechCorp Solutions. With over 5 years of experience in frontend development and a proven track record of delivering high-quality web applications, I am excited about the opportunity to contribute to your innovative team.

In my current role as a Frontend Developer at my previous company, I have successfully led the development of multiple React-based applications, utilizing modern technologies such as TypeScript, Next.js, and various state management solutions. My experience aligns perfectly with your requirements, particularly in building scalable user interfaces and implementing responsive design principles.

What sets me apart is my passion for creating exceptional user experiences and my ability to collaborate effectively with cross-functional teams. I have consistently delivered projects on time while maintaining high code quality standards and ensuring optimal performance across different devices and browsers.

I am particularly drawn to TechCorp Solutions because of your commitment to innovation and your focus on creating products that make a real impact. I would welcome the opportunity to discuss how my technical expertise and creative problem-solving skills can contribute to your team's continued success.

Thank you for considering my application. I look forward to hearing from you soon.

Best regards,
John Smith`;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-6 py-4 border-b border-gray-100">
          <TouchableOpacity className="mr-4" onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Cover Letter
          </Text>
        </View>

        {/* Word Count */}
        <View className="px-6 py-4 bg-gray-50">
          <Text className="text-sm text-gray-600">350 words</Text>
        </View>

        <ScrollView className="flex-1 px-6 py-6">
          {/* Cover Letter Content */}
          <View className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
            <Text className="text-gray-800 text-base leading-7">
              {coverLetterText}
            </Text>
          </View>
        </ScrollView>

        {/* Action Buttons */}
        <View className="px-6 pb-6 bg-white border-t border-gray-100">
          {/* Primary Action - Regenerate */}
          <TouchableOpacity className="bg-blue-500 rounded-2xl py-4 flex-row items-center justify-center mb-4">
            <IconSymbol name="arrow.clockwise" size={20} color="white" />
            <Text className="text-white font-semibold text-base ml-2">
              Regenerate Cover Letter
            </Text>
          </TouchableOpacity>

          {/* Secondary Actions Row 1 */}
          <View className="flex-row gap-3 mb-3">
            <TouchableOpacity className="flex-1 bg-gray-100 rounded-2xl py-4 flex-row items-center justify-center">
              <IconSymbol name="square.and.pencil" size={18} color="#374151" />
              <Text className="text-gray-700 font-medium ml-2">
                Edit Cover Letter
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-gray-100 rounded-2xl py-4 flex-row items-center justify-center">
              <IconSymbol name="bookmark" size={18} color="#374151" />
              <Text className="text-gray-700 font-medium ml-2">Save</Text>
            </TouchableOpacity>
          </View>

          {/* Secondary Actions Row 2 */}
          <View className="flex-row gap-3">
            <TouchableOpacity className="flex-1 bg-gray-100 rounded-2xl py-4 flex-row items-center justify-center">
              <IconSymbol name="mail" size={18} color="#374151" />
              <Text className="text-gray-700 font-medium ml-2">Send Email</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-gray-100 rounded-2xl py-4 flex-row items-center justify-center">
              <IconSymbol name="doc.text" size={18} color="#374151" />
              <Text className="text-gray-700 font-medium ml-2">
                Copy to Clipboard
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
