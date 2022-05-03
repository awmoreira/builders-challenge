import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import Welcome from './screens/Welcome';
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Welcome />
    </ThemeProvider>
  );
};

export default App;
