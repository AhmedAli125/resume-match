# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start development server:**

```bash
pnpm start
# or
npx expo start
```

**Platform-specific development:**

```bash
pnpm run android    # Android emulator
pnpm run ios        # iOS simulator
pnpm run web        # Web browser
```

**Code quality:**

```bash
pnpm run lint       # Run ESLint
pnpm run lint:fix   # Fix ESLint issues
pnpm run typecheck  # TypeScript type checking
pnpm run format     # Format with Prettier
pnpm run format:check # Check formatting
```

**Project reset:**

```bash
pnmp run reset-project  # Move starter code to app-example/ and create blank app/
```

## Architecture Overview

This is a React Native/Expo application using:

- **Expo Router** for file-based routing with Stack and Tabs navigation
- **NativeWind** for Tailwind CSS styling in React Native
- **TypeScript** for type safety
- **React Native Reanimated** for animations
- **Expo Vector Icons** and custom IconSymbol components

**Key directories:**

- `app/` - Main application code with file-based routing
  - `(tabs)/` - Tab-based screens (index.tsx, explore.tsx)
  - `_layout.tsx` - Root layout with theme provider and stack navigation
- `components/` - Reusable React components including themed components and UI elements
- `hooks/` - Custom React hooks for color scheme and theme management
- `constants/` - App constants like Colors.ts
- `assets/` - Static assets (fonts, images)

**Styling approach:**

- Uses NativeWind (Tailwind for React Native) via `global.css`
- Theme-aware components with `useColorScheme` hook
- Platform-specific styling for iOS blur effects and tab bar behavior

**Pre-commit setup:**

- Husky for git hooks
- lint-staged runs ESLint and Prettier on staged files
- Automatic code formatting and linting before commits

## Commit Guidelines

- Do not add Claude watermark in commit messages or descriptions
