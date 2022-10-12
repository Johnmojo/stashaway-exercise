import nextJest from "next/jest";

// Point the directory to the root of your project
const createJestConfig = nextJest({
  dir: "./"
});

// Custom config
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom"
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
