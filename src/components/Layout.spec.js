import React from 'react';
import Layout from './Layout'
import chai from 'chai'
import { shallow } from 'enzyme';

const expect = chai.expect
const should = 	chai.should()

describe("Layout", function () {

	it('should render', function () {
		const div = shallow(<Layout />)
		expect(div).to.exist
	})

	it("should have navbar", function () {
		expect(shallow(<Layout />).contains(<nav className="navbar" />)).to.be.true
	})

	it("should render children", function () {
		const children = <div>children</div>
		expect(shallow(<Layout>{children}</Layout>).contains(<div>children</div>)).to.be.true
	})

})