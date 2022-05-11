export default {
  addListener: jest.fn(),
  getCurrentPosition: jest.fn((success, failure, options) => {
    success({
      coords: {
        longitude: 60,
        latitude: 60,
      },
    });
  }),
  removeListeners: jest.fn(),
  requestAuthorization: jest.fn(),
  setConfiguration: jest.fn(),
  startObserving: jest.fn(),
  stopObserving: jest.fn(),
};
