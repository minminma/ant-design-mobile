import React from 'react';
import RcSlider from 'rc-slider/lib/Slider';
import RcSliderHandle from 'rc-slider/lib/Handle';
import SliderProps from './PropsType';

const DefaultHandlePlugin = (props) => {
  return (
      <RcSliderHandle {...props} />
  );
};

export default class Slider extends React.Component<SliderProps, any> {
  static defaultProps = {
    prefixCls: 'am-slider',
    tipTransitionName: 'zoom-down',
    plugin: [DefaultHandlePlugin],
  };
  static Handle = RcSliderHandle; // users may use `Slider.Handle` to custom plugin

  handle = (...args) => {
    return this.props.plugin.map((pluginFunc, index) => (
      <div key={index}>
        {pluginFunc(...args)}
      </div>
    ));
  }

  render() {
    return (
      <div className={`${this.props.prefixCls}-wrapper`}><RcSlider { ...this.props } handle={this.handle} /></div>
    );
  }
}
