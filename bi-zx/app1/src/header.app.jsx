import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            test: '测试组件state'
        }
    }
    render() {
        return <div>这是头部 -- {this.props.msg}</div>
    }
}

export default Button;
