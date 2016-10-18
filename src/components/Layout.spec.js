import React from 'react';
import Layout from './Layout'
import chai from 'chai'
import { shallow } from 'enzyme';

const expect = chai.expect
const should = 	chai.should()

describe("Layout", () => {

	it('should render', () => {
		const layout = shallow(<Layout />)
		expect(layout).to.exist
	})

	it("should have navbar", () => {
		const layout = shallow(<Layout />)
		expect(layout.debug()).to.contain('NavBar')
	})

	it("should render children", () => {
		const children = <div>children</div>
		const layout = shallow(<Layout>{children}</Layout>)
		expect(layout.contains(children)).to.be.true
	})

})