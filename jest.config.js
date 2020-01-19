module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTest.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
};
