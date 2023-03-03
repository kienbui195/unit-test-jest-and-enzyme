import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  const props = {
    text: 'Click me',
    className: 'test-class',
    style: { backgroundColor: 'red' },
    handleClick: jest.fn()
  };

  const buttonWrapper = shallow(<Button {...props} />);

  it('should render correctly', () => {
    expect(buttonWrapper).toMatchSnapshot();
  });

  it('should have the correct props', () => {
    expect(buttonWrapper.prop('className')).toEqual(props.className);
    expect(buttonWrapper.prop('style')).toEqual(props.style);
    expect(buttonWrapper.text()).toEqual(props.text);
  });

  it('should call handleClick when clicked', () => {
    buttonWrapper.simulate('click');
    expect(props.handleClick).toHaveBeenCalled();
  });
});
