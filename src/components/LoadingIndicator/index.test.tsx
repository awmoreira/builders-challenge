import React from 'react';
import renderer from 'react-test-renderer';
import LoadingIndicator from '.';

describe('Loading Indicator Component', () => {
  it('should render component', () => {
    const tree = renderer.create(<LoadingIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
