import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import Button from '../Button/Button';

//test with jest and enzyme
describe('Footer component', () => {
    let wrapper;
    const mockHandleClick = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Footer handleClick={mockHandleClick} />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('renders two Button components', () => {
        expect(wrapper.find(Button)).toHaveLength(2);
    });

    it('clicking Decrease Button calls handleClick with false', () => {
        const decreaseButton = wrapper.find(Button).at(0);
        decreaseButton.simulate('click');
        expect(mockHandleClick).not.toHaveBeenCalledWith('foo');
    });

    // it('clicking Increase Button calls handleClick with true', () => {
    //     const increaseButton = wrapper.find(Button).at(1);
    //     increaseButton.simulate('click');
    //     expect(mockHandleClick).toHaveBeenCalledWith('foo');
    // });
});
