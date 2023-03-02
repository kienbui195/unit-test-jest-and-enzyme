import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';


//test with jest and react-test-renderer
describe('Button component', () => {
    it('renders without crashing', () => {
        renderer
            .create(<Button />)
    })

    it('renders with correct text  props', () => {
        const tree = renderer
            .create(<Button text='Click Me!' />)
            .toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders with correct className prop', () => {
        const tree = renderer
            .create(<Button className='Hello' />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('calls handleClick prop when clicked', () => {
        const handleClick = jest.fn()
        const tree = renderer
            .create(<Button text='Click Me' className='Hello' handleClick={handleClick} />)
            .toJSON()
        tree.props.onClick()
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
});
