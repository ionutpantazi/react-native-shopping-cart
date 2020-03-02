import React from 'react'
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
class Numar extends React.Component {
    render() {
        const { cosProduse } = this.props;
        return (
            <div style={{ fontSize: '40px', color: '#08c' }}>
                <Badge count={cosProduse.length}>
                <ShoppingCartOutlined />
                </Badge>
            </div>
            
        )
    }
}

export default Numar