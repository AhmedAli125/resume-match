// Fallback for using MaterialIcons on Android and web.
import { ComponentProps } from 'react';

import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { SymbolViewProps, SymbolWeight } from 'expo-symbols';

type IconMapping = Record<
  SymbolViewProps['name'],
  ComponentProps<typeof MaterialIcons>['name']
>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  brain: 'psychology',
  'doc.text': 'description',
  envelope: 'email',
  globe: 'language',
  'arrow.up.doc': 'upload',
  magnifyingglass: 'search',
  folder: 'folder',
  'chart.bar': 'bar-chart',
  mail: 'email',
  person: 'person',
  plus: 'add',
  'line.horizontal.3': 'tune',
  ellipsis: 'more-vert',
  'chevron.left': 'arrow-back',
  'icloud.and.arrow.up': 'cloud-upload',
  xmark: 'close',
  'square.and.pencil': 'edit',
  'chevron.down': 'keyboard-arrow-down',
  clock: 'schedule',
  eye: 'visibility',
  trash: 'delete',
  'checkmark.circle': 'check-circle',
  'xmark.circle': 'cancel',
  bookmark: 'bookmark',
  'arrow.clockwise': 'refresh',
  lightbulb: 'lightbulb',
  star: 'star',
  briefcase: 'work',
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
