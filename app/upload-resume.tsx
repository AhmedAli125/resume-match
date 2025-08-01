import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function UploadResumeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-6 py-4">
          <TouchableOpacity className="mr-4" onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Upload Resume
          </Text>
        </View>

        <ScrollView className="flex-1 px-6">
          {/* File Upload Area */}
          <View className="relative mb-8">
            <TouchableOpacity className="bg-blue-50 rounded-2xl py-16 px-6 items-center border-2 border-dashed border-blue-200">
              <IconSymbol
                name="icloud.and.arrow.up"
                size={48}
                color="#9CA3AF"
              />
              <Text className="text-gray-700 font-medium text-lg mt-4 mb-2">
                Tap to select a file
              </Text>
              <Text className="text-gray-500 text-sm">
                PDF, DOC, DOCX up to 5MB
              </Text>
            </TouchableOpacity>

            {/* Close button */}
            <TouchableOpacity className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full items-center justify-center shadow-sm">
              <IconSymbol name="xmark" size={16} color="#6B7280" />
            </TouchableOpacity>
          </View>

          {/* What's Next Section */}
          <View className="mb-8">
            <Text className="text-lg font-semibold text-gray-900 mb-6">
              What&apos;s Next?
            </Text>

            <View className="gap-4">
              <NextStepItem
                icon="brain"
                title="AI Resume Analysis"
                description="Get instant feedback on how well your resume matches the job description"
                iconColor="#4285F4"
              />

              <NextStepItem
                icon="square.and.pencil"
                title="Generate Cover Letter"
                description="Let AI help you create a personalized cover letter based on the job description"
                iconColor="#4285F4"
              />

              <NextStepItem
                icon="mail"
                title="Send via Gmail"
                description="Easily send your resume and cover letter directly through Gmail"
                iconColor="#4285F4"
              />
            </View>
          </View>

          {/* Upload & Analyse Section */}
          <View className="bg-gray-50 rounded-2xl p-6 mb-8">
            <Text className="text-lg font-semibold text-gray-900 text-center">
              Upload & Analyse
            </Text>
          </View>
        </ScrollView>

        {/* Bottom Upload Button */}
        <View className="px-6 pb-6">
          <TouchableOpacity className="bg-blue-500 rounded-2xl py-4 items-center">
            <Text className="text-white font-semibold text-lg">Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

function NextStepItem({
  icon,
  title,
  description,
  iconColor,
}: {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
}) {
  return (
    <View className="flex-row items-start">
      <View className="w-10 h-10 bg-blue-50 rounded-xl items-center justify-center mr-4 mt-1">
        <IconSymbol name={icon as any} size={20} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="text-gray-900 font-medium text-base mb-1">
          {title}
        </Text>
        <Text className="text-gray-600 text-sm leading-5">{description}</Text>
      </View>
    </View>
  );
}
