import styled, { css } from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapperTop = styled.View<{ isLoading?: boolean }>`
  padding-top: ${({ theme }) => theme.metrics.statusHeight + 34}px;
  padding-bottom: 34px;
  align-items: center;
  justify-content: center;
  ${({ isLoading }) =>
    isLoading &&
    css`
      flex: 1;
    `}
`;
export const WrapperMiddle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const WrapperBottom = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

interface IAnyText {
  size?: number;
  weight?: string | number;
  margin?: string;
  padding?: string;
  color?: string;
}

export const AnyText = styled.Text<IAnyText>`
  font-size: ${({ size }) => size ?? 16}px;
  font-weight: ${({ weight }) => weight ?? 500};
  margin: ${({ margin }) => margin ?? 0};
  padding: ${({ padding }) => padding ?? 0};
  font-family: ${({ theme }) => theme.fonts.SourceSansPro[500]};
  color: ${({ color }) => color ?? '#000'};
`;

export const UpdateButton = styled(Button)``;

export const TagMinMax = styled.View`
  width: 75px;
  height: 129px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 49px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 13px;
`;
export const WrapperTags = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.View`
  width: 36px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.black};
`;
