import styled, { css } from 'styled-components/native';

interface IContainer {
  type: string;
  disabled: boolean;
  margin: string;
  radius?: string;
}

export const Container = styled.TouchableOpacity<IContainer>`
  min-height: 60px;
  max-height: 60px;
  flex-grow: 1;
  background-color: ${({ theme, type }) =>
    type === 'primary'
      ? theme.colors.white
      : type === 'secondary'
      ? theme.colors.transparent
      : theme.colors.background};
  border-radius: ${({ radius }) => radius ?? '10px'};
  flex-direction: row;
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

  padding: 18px 30px;
`;

interface ILabel {
  type: string;
  fontsize: number;
  icon?: boolean;
}

export const Label = styled.Text<ILabel>`
  font-size: ${({ fontsize }) => fontsize ?? 16}px;
  color: ${({ theme, type }) =>
    type === 'primary'
      ? theme.colors.black
      : type === 'secondary'
      ? theme.colors.text
      : theme.colors.text};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.SourceSansPro[400]};
  ${({ icon }) =>
    icon &&
    css`
      padding-left: 10px;
    `}
`;
