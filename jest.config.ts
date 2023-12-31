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
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
