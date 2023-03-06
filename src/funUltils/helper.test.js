import React from 'react'
import Link from './helper'
import renderer from 'react-test-renderer'

describe('<Link />', () => {
    it('render dung', () => {
        const root = renderer.create(<Link link={'https://fb.com'} nameLink={'Facebook'} />).toJSON()
        expect(root).toMatchSnapshot()
    })
})