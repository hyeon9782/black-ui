export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        babelConfig: {
          plugins: ["@vanilla-extract/babel-plugin"],
        },
      },
    ],
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
  },
  moduleNameMapper: {
    "^@/css/(.*)$": "<rootDir>/src/css/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
