import { SafeAreaView } from 'react-native-safe-area-context';

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function AnalysisResultsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center px-6 py-4 bg-gray-50 border-b border-gray-100">
          <TouchableOpacity className="mr-4" onPress={() => router.back()}>
            <IconSymbol name="chevron.left" size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-900">
            Analysis Results
          </Text>
        </View>

        <ScrollView className="flex-1">
          {/* Match Score Card */}
          <View className="bg-blue-50 mx-6 mt-6 rounded-2xl p-8 items-center">
            <CircularProgress percentage={78} />
            <Text className="text-xl font-bold text-gray-900 mt-4 mb-2">
              Match Score
            </Text>
            <Text className="text-gray-600 text-center text-sm leading-5">
              Your resume matches well with the job requirements
            </Text>
          </View>

          {/* Skills Match */}
          <View className="bg-white mx-6 mt-6 rounded-2xl p-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold text-gray-900">
                Skills Match
              </Text>
              <Text className="text-blue-500 font-semibold">82%</Text>
            </View>

            <View className="flex-row">
              <View className="flex-1 mr-4">
                <Text className="text-green-600 font-semibold mb-3">
                  Matched Skills
                </Text>
                <SkillItem text="Project Management" matched />
                <SkillItem text="Data Analysis" matched />
                <SkillItem text="Team Leadership" matched />
              </View>

              <View className="flex-1">
                <Text className="text-red-500 font-semibold mb-3">
                  Missing Skills
                </Text>
                <SkillItem text="Python" />
                <SkillItem text="AWS" />
              </View>
            </View>
          </View>

          {/* Experience Match */}
          <View className="bg-white mx-6 mt-4 rounded-2xl p-6">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-lg font-bold text-gray-900">
                Experience Match
              </Text>
              <Text className="text-blue-500 font-semibold">90%</Text>
            </View>
            <Text className="text-gray-600 text-sm">
              Your 5 years experience exceeds the required 3 years
            </Text>
          </View>

          {/* Keywords Match */}
          <View className="bg-white mx-6 mt-4 rounded-2xl p-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold text-gray-900">
                Keywords Match
              </Text>
              <Text className="text-blue-500 font-semibold">75%</Text>
            </View>

            <View className="flex-row">
              <View className="flex-1 mr-4">
                <Text className="text-green-600 font-semibold mb-3">
                  Found Keywords
                </Text>
                <SkillItem text="Agile" matched />
                <SkillItem text="Scrum" matched />
                <SkillItem text="SQL" matched />
              </View>

              <View className="flex-1">
                <Text className="text-red-500 font-semibold mb-3">
                  Missing Keywords
                </Text>
                <SkillItem text="Docker" />
                <SkillItem text="Kubernetes" />
              </View>
            </View>
          </View>

          {/* Education Match */}
          <View className="bg-white mx-6 mt-4 rounded-2xl p-6">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-lg font-bold text-gray-900">
                Education Match
              </Text>
              <Text className="text-green-600 font-semibold">100%</Text>
            </View>
            <Text className="text-gray-600 text-sm">
              Bachelor&apos;s Degree requirement met
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="mx-6 mt-6">
            <TouchableOpacity
              className="bg-blue-500 rounded-2xl py-4 flex-row items-center justify-center mb-4"
              onPress={() => router.push('/cover-letter-setup')}
            >
              <IconSymbol name="brain" size={20} color="white" />
              <Text className="text-white font-semibold text-base ml-2">
                Generate AI Cover Letter
              </Text>
            </TouchableOpacity>

            <View className="flex-row gap-4 mb-4">
              <TouchableOpacity className="flex-1 bg-gray-100 rounded-2xl py-4 flex-row items-center justify-center">
                <IconSymbol name="bookmark" size={18} color="#374151" />
                <Text className="text-gray-700 font-medium ml-2">
                  Save Analysis
                </Text>
              </TouchableOpacity>

              <TouchableOpacity className="flex-1 bg-gray-100 rounded-2xl py-4 flex-row items-center justify-center">
                <IconSymbol name="arrow.clockwise" size={18} color="#374151" />
                <Text className="text-gray-700 font-medium ml-2">
                  Start New Analysis
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Recommended Improvements */}
          <View className="bg-white mx-6 mt-4 mb-8 rounded-2xl p-6">
            <Text className="text-lg font-bold text-gray-900 mb-4">
              Recommended Improvements
            </Text>

            <RecommendationItem text="Add specific Python projects to your experience section" />
            <RecommendationItem text="Include AWS certifications in your credentials" />
            <RecommendationItem text="Highlight Docker usage in your technical skills" />
            <RecommendationItem text="Add more details about your Scrum experience" />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function CircularProgress({ percentage }: { percentage: number }) {
  return (
    <View className="w-24 h-24 items-center justify-center">
      <View className="w-24 h-24 rounded-full border-8 border-blue-500 items-center justify-center">
        <Text className="text-2xl font-bold text-blue-500">{percentage}%</Text>
      </View>
    </View>
  );
}

function SkillItem({
  text,
  matched = false,
}: {
  text: string;
  matched?: boolean;
}) {
  return (
    <View className="flex-row items-center mb-2">
      <IconSymbol
        name={matched ? 'checkmark.circle' : 'xmark.circle'}
        size={16}
        color={matched ? '#10B981' : '#EF4444'}
      />
      <Text className="ml-2 text-gray-700 text-sm">{text}</Text>
    </View>
  );
}

function RecommendationItem({ text }: { text: string }) {
  return (
    <View className="flex-row items-start mb-3">
      <IconSymbol name="lightbulb" size={16} color="#3B82F6" />
      <Text className="ml-3 text-gray-700 text-sm leading-5 flex-1">
        {text}
      </Text>
    </View>
  );
}
