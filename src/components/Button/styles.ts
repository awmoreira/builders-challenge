import styled, { css } from 'styled-components/native';

interface IContainer {
  type: string;
  disabled: boolean;
  margin: string;
}

export const Container = styled.TouchableOpacity<IContainer>`
  min-height: 60px;
  max-height: 60px;
  flex-grow: 1;
  background-color: ${({ theme, type }) =>
    type === 'primary'
      ? theme.colors.primary
      : type === 'secondary'
      ? theme.colors.transparent
      : theme.colors.secondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  margin: ${({ margin }) => margin};
  ${({ type }) =>
    type === 'secondary' &&
    css`
      border-width: 2px;
      border-color: ${({ theme }) => theme.colors.primary};
    `};
`;

interface ILabel {
  type: string;
}

export const Label = styled.Text<ILabel>`
  font-size: ${({ type }) => (type === 'tertiary' ? 18 : 16)}px;
  color: #f1ebde;
  color: ${({ theme, type }) =>
    type === 'primary'
      ? theme.colors.text
      : type === 'secondary'
      ? theme.colors.text
      : theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.SourceSansPro[700]};
  margin: 0px 10px;
`;
