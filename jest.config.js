module.exports = {
  cacheDirectory: '<rootDir>/.jest-cache',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/src/components/**/*.tsx',
    '**/src/shared/utilities/*.ts',
    '!**/src/components/**/*.stories.tsx',
  ],
  coverageThreshold: {
    // Initially we do not require specific coverage.
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/test/svgrMock.js',
  },
  preset: 'ts-jest',
  setupFiles: ['./jest.storybookSetup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/storybook-static',
    '<rootDir>/dist',
    '<rootDir>/src/deprecated',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|jsx|js)$',
  transform: {
    '^.+\\.[t|j]sx?$': 'ts-jest',
  },
};
