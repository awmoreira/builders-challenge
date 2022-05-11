import React from 'react';
import renderer from 'react-test-renderer';
import DefaultProvider from '~/utils/DefaultProvider';
import { render, cleanup } from '@testing-library/react-native';
import Welcome from '.';
import 'jest-styled-components';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

describe('Loading Indicator Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render component', () => {
    const tree = renderer
      .create(
        <DefaultProvider>
          <Welcome />
        </DefaultProvider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render button with background color white for see wheather', () => {
    const { getByTestId } = render(
      <DefaultProvider>
        <Welcome />
      </DefaultProvider>,
    );
    expect(getByTestId(/button-see-weather/)).toBeDefined();
    expect(getByTestId(/button-see-weather/).props.style.backgroundColor).toBe('#fff');
  });
});
