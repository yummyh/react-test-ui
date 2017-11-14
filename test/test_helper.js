import {
	expect
} from 'chai';
import sinon from 'sinon';
import {
	configure
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
	adapter: new Adapter()
});

global.expect = expect;
global.sinon = sinon;