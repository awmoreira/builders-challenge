export const mockUseNavigation = {
  goBack: jest.fn(),
  navigate: jest.fn(),
  push: jest.fn(),
  popToTop: jest.fn(),
  addListener: jest.fn((_, callback) => callback()),
  canGoBack: jest.fn().mockReturnValue(true),
  setOptions: jest.fn(),
  dangerouslyGetParent: jest.fn(),
  dangerouslyGetState: jest.fn(),
  dispatch: jest.fn(),
  isFocused: jest.fn(),
  removeListener: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  openDrawer: jest.fn(),
};

export const mockUseRoute = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');

  return {
    ...originalModule,
    useRoute: mockUseRoute,
    useNavigation: () => mockUseNavigation,
  };
});

jest.mock('react-native-iphone-x-helper', () => ({
  getStatusBarHeight: jest.fn(),
  isIphoneX: jest.fn(),
  getBottomSpace: jest.fn(),
}));
