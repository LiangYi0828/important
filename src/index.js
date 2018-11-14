import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {
    Button,
    ActivityIndicator
} from 'antd-mobile';

ReactDOM.render(
<div>
    <Button type="warning">test antd </Button>
    <ActivityIndicator animating />
</div>,
document.getElementById('root')
);


