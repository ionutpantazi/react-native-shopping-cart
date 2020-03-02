import React from 'react';
import { Rate } from 'antd';
import { Card } from 'antd';
class Produse extends React.Component {
    render() {
        const { Meta } = Card;
        const listaProduse = this.props.produse.map(produs => (
            <Card
                hoverable
                style={{ width: 300, margin: '10px' }}
                cover={<img src={produs.imagine} style={{ width: '90%', margin: '20px' }}></img>}
            >
                <Meta title={produs.nume} description={produs.pret+' lei/kg'}></Meta>
                <button onClick={(click) => this.props.handleAdauga(click, produs)} class="btn btn-outline-primary btn-sm float-right">Adauga in cos</button>
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

/*<div class="card col-md-3 border-white">
                <img src={produs.imagine} alt={produs.nume} class="card-img-top zoom"/>
                <Rate/>
                <div class="card-body">
                    <h5 class="text-center font-weight-bold">{produs.nume}</h5>
                    <span>{produs.pret} $/kg</span>
                    <button onClick={(click) => this.props.handleAdauga(click, produs)} class="btn btn-outline-primary btn-sm float-right">Adauga in cos</button>
                </div>
            </div>
            */