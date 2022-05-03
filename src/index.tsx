import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import theme from './theme';
import Routes from './navigation';

const App: React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
