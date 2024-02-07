/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['node_modules/', 'src/'],
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
};
