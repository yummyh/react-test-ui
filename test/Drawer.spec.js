import React from 'react';
import {
  expect
} from 'chai';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
import {
  mount,
  shallow,
  render,
  configure
} from 'enzyme';

import Drawer from '../src/index.js';


configure({
  adapter: new Adapter()
});

describe('(组件) Drawer', () => {

  it('调用 componentDidMount', () => {
    //spyLifecycle(Drawer);

    const props = {
      style: {}, //窗口样式
      visible: false, //是否关闭窗口
      maskStyle: {}, //蒙层样式
      maskAnimation: false,
      animation: 'none', //动画效果slide fade none
      changeVisible: function() {} //关闭事件
    }

    //加载props
    mount(<Drawer {...props} />);

    // Drawer的componentDidMount方法应该被调用一次，使用expect断言
    expect(Drawer.prototype.componentDidMount).to.have.property('callCount', 1);
  });

  /*    it('调用changeVisible一旦被挂载', () => {
        const props = {
          onMount: sinon.spy()
        };

        mount(<Drawer {...props} />);
        expect(props.changeVisible.calledOnce).to.be.true;
      });*/

  it('组件应该被渲染为 <div>', () => {
    const wrapper = shallow(<Drawer  {...props} />);
    expect(wrapper.type()).to.eql('div');
  });

  describe('当visible为false,maskAnimation为false时', () => {
    const wrapper = shallow(
      <Drawer visible={false} maskAnimation={false} />
    )
    it('组件className应该被渲染为drawer-hide', () => {
      expect(wrapper.prop('className')).to.eql('drawer-wrap drawer-hide ');
    });
  });

  describe('当visible为true,maskAnimation为true时', () => {
    const wrapper = shallow(
      // just passing isActive is an alias for true
      <Drawer visible={true} maskAnimation={true} />
    )
    it('组件className应该被渲染为drawer-hide', () => {
      expect(wrapper.prop('className')).to.eql('drawer-wrap drawer-show drawer-mask-fadeIn');
    });
  });

});