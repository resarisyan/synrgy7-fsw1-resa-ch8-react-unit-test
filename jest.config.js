export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|webp)$': 'jest-transform-stub',
  },

  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
