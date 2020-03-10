import React from 'react'
import { Badge } from 'antd';
class Numar extends React.Component {
    render() {
        const { cosProduse } = this.props;
        return (
            <span>
                <Badge count={cosProduse.length}>
                <img src="imagini/cos.png" alt="cos" height="60" width="60" />
                </Badge>
            </span>
        )
    }
}

export default Numar