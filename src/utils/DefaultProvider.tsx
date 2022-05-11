import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '~/theme';

interface IDefaultProvider {
  children: JSX.Element;
}

const DefaultProvider: React.FC<IDefaultProvider> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default DefaultProvider;
