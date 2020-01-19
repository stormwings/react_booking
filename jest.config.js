module.exports = {
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/__test__/__config__/setupTest.js"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__test__/__mocks__/styleMock.js"
  }
};
