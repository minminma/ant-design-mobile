---
order: 0
title: 基本
---


基本滑动条。当 `disabled` 为 `true` 时，滑块处于不可用状态。



```jsx
import { Slider, Range, WingBlank, WhiteSpace, SliderTooltipPlugin } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (
      <div className="am-slider-example">
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Slider</p>
          <Slider defaultValue={26} min={0} max={100} plugin={[SliderTooltipPlugin]} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">Range</p>
          <Range min={0} max={20} defaultValue={[3, 10]} />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="title">不可用状态</p>
          <Slider defaultValue={26} disabled plugin={[SliderTooltipPlugin]} />
        </WingBlank>
        <WhiteSpace size="lg" />
      </div>
    );
  },
});
ReactDOM.render(<App />, mountNode);
```
````css
.demo-preview-item .am-slider-wrapper {
  margin-bottom: 0.3rem;
}
.demo-preview-item .am-slider-example {
  overflow: hidden;
}
.am-wingblank.am-wingblank-lg {
  margin-bottom: 0.6rem;
}
.demo-preview-item .am-slider-example .title {
  margin-bottom: 0.32rem;
}
.demo-preview-item .am-slider-wrapper:last-child {
  margin-bottom: 0.2rem;
}
````
