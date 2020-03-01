import React from 'react';
import { Rate } from 'antd';
class Produse extends React.Component {
    render() {
        const listaProduse = this.props.produse.map(produs => (
            <div class="card col-md-3 border-white">
                <img src={produs.imagine} alt={produs.nume} class="card-img-top zoom" data-toggle="modal" data-target="#exampleModal" />
                <Rate/>
                <div class="card-body">
                    <h5 class="text-center font-weight-bold">{produs.nume}</h5>
                    <span>{produs.pret} $/kg</span>
                    <button onClick={(click) => this.props.handleAdauga(click, produs)} class="btn btn-outline-primary btn-sm float-right">Adauga in cos</button>
                </div>
            </div>
        ))
        return (
            <div className="row">
                {listaProduse}
            </div>
        )
    }
}

export default Produse