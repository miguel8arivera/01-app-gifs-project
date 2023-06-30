// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transoform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
};
