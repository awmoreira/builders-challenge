module.exports = {
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    'jest-styled-components',
    '<rootDir>/__mocks__/setup.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
