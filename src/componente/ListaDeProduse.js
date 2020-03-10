import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
class Produse extends React.Component {
    render() {
        const { Meta } = Card;
        const listaProduse = this.props.produse.map(produs => (
            <Card
                hoverable
                style={{ width: 300, margin: '10px' }}
                cover={<img src={produs.imagine} alt={produs.nume} style={{ width: '90%', margin: '20px' }}></img>}
            >
                <Meta title={produs.nume} description={produs.pret+' lei/kg'}></Meta>
                <Button type="primary" onClick={(click) => this.props.handleAdauga(click, produs)} style={{ float: 'right'}}>Adauga in cos</Button>
            </Card>
            
        ))
        return (
            <div className="row">
                {listaProduse}
            </div>
        )
    }
}

export default Produse