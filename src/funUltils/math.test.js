import { math } from "./math";
import { shallow } from 'enzyme';


// describe('test math func with jest', () => {
//     test('+', () => {
//         expect(math(2,3,'+')).toBe(`2 + 3 = 5`)
//     })

//     test('%', () => {
//         expect(math(2,3,'%')).toBeUndefined()
//     })
// })

describe('test math func with enzyme', () => {
    test('+', () => {
        const wrapper = shallow(<div>{math(2, 3, '+')}</div>)
        expect(wrapper.text()).toBe('2 + 3 = 5')
    })
})