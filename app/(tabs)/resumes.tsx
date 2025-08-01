import { SafeAreaView } from 'react-native-safe-area-context';

import { useRef, useState } from 'react';

import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { router } from 'expo-router';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function ResumesScreen() {
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

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
            <ResumeItem
              key={resume.id}
              resume={resume}
              activeMenuId={activeMenuId}
              setActiveMenuId={setActiveMenuId}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function ResumeItem({
  resume,
  activeMenuId,
  setActiveMenuId,
}: {
  resume: { id: number; name: string; date: string; size: string };
  activeMenuId: number | null;
  setActiveMenuId: (id: number | null) => void;
}) {
  const isMenuVisible = activeMenuId === resume.id;
  const buttonRef = useRef<View>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleMenuPress = () => {
    if (!isMenuVisible && buttonRef.current) {
      buttonRef.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number
        ) => {
          setMenuPosition({
            x: pageX - 150, // Position menu to the left of the button
            y: pageY + height + 5, // Position menu below the button
          });
        }
      );
    }
    setActiveMenuId(isMenuVisible ? null : resume.id);
  };

  const handleMenuAction = (action: string) => {
    setActiveMenuId(null);

    switch (action) {
      case 'view':
        router.push('/resume-preview');
        break;
      case 'analyze':
        router.push('/resume-analysis');
        break;
      case 'delete':
        // Handle delete action
        break;
    }
  };

  return (
    <View className="relative">
      <TouchableOpacity
        className="flex-row items-center py-4 px-4 mb-3 bg-gray-50 rounded-xl"
        onPress={() => router.push('/resume-preview')}
      >
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
        <TouchableOpacity
          ref={buttonRef}
          className="w-8 h-8 items-center justify-center"
          onPress={handleMenuPress}
        >
          <IconSymbol name="ellipsis" size={20} color="#9CA3AF" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Context Menu */}
      {isMenuVisible && (
        <Modal
          transparent
          visible={isMenuVisible}
          onRequestClose={() => setActiveMenuId(null)}
        >
          <TouchableOpacity
            className="flex-1 bg-black/20"
            activeOpacity={1}
            onPress={() => setActiveMenuId(null)}
          >
            <View
              className="absolute bg-white rounded-xl shadow-lg border border-gray-100 min-w-48"
              style={{
                left: menuPosition.x,
                top: menuPosition.y,
              }}
            >
              <TouchableOpacity
                className="flex-row items-center px-4 py-3 border-b border-gray-100"
                onPress={() => handleMenuAction('view')}
              >
                <IconSymbol name="eye" size={20} color="#6B7280" />
                <Text className="ml-3 text-gray-900 font-medium">
                  View Resume
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row items-center px-4 py-3 border-b border-gray-100"
                onPress={() => handleMenuAction('analyze')}
              >
                <IconSymbol name="brain" size={20} color="#4285F4" />
                <Text className="ml-3 text-gray-900 font-medium">
                  Analyze Resume
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row items-center px-4 py-3"
                onPress={() => handleMenuAction('delete')}
              >
                <IconSymbol name="trash" size={20} color="#EF4444" />
                <Text className="ml-3 text-red-500 font-medium">
                  Delete Resume
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </View>
  );
}
