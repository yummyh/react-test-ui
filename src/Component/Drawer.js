import React from 'react';
import classnames from 'classnames';
import '../style/drawer.less';

class Drawer extends React.Component {

    componentDidMount() {
        if (!!this.props.visible) {
            document.body.classList.add('drawer-open');
        }

/*        let mql = window.matchMedia('(orientation: portrait)');
        this.handleOrientationChange(mql);
        mql.addListener(this.handleOrientationChange);*/
    }

    /*    componentWillUnmount() {
            let mql = window.matchMedia('(orientation: portrait)');
            mql.removeListener(this.handleOrientationChange);
        }*/

    //监听横屏变化
    handleOrientationChange(mql) {
        if (mql.matches) {
            document.querySelector('html').style.fontSize = 'calc(100vw/3.75)'; // 竖屏
        } else {
            document.querySelector('html').style.fontSize = 'calc(100vw/6.8)'; // 横屏
        }
    }

    // 关闭浮层
    handleModalClicked(tag, value) {
        document.body.classList.remove('drawer-open');
        this.props.changeVisible(tag, value);
    }

    render() {
        let {
            style,
            visible,
            maskStyle,
            maskAnimation,
            animation,
            children
        } = this.props;
        let wrap_className = classnames('drawer-wrap', //蒙层动画
            visible ? 'drawer-show' : 'drawer-hide', !!visible && maskAnimation ? 'drawer-mask-fadeIn' : '');

        let ctn_className = classnames('drawer-content ', !!visible ? `drawer-ctn-${animation}` : '');


        return (
            <div className={wrap_className} style={maskStyle}  onClick={this.handleModalClicked.bind(this)}>         
                <div className={ctn_className} style={!!visible ? style : {width:'0%'}} onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        )
    }
}

Drawer.defaultProps = {
    style: {}, //窗口样式
    visible: false, //是否关闭窗口
    maskStyle: {}, //蒙层样式
    maskAnimation: false,
    animation: 'none', //slide fade none
    changeVisible: function() {} //关闭事件
}
module.exports = Drawer;