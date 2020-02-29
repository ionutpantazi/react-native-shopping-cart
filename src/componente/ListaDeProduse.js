import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Produse extends React.Component {
    render() {
        const listaProduse = this.props.produse.map(produs => (
            <Card style={{ width: '18rem' }} className="col-md-4">
                <Card.Img variant="top" src={produs.imagine} alt={produs.nume}/>
                <Card.Body>
                    <Card.Title>{produs.nume}</Card.Title>
                    <Card.Text>{produs.descriere}</Card.Text>
                    <span>{produs.pret}</span>
                    <Button variant="primary" onClick={(click) => this.props.handleAdauga(click, produs)}>adauga</Button>
                </Card.Body>
            </Card>
        ))
        return (
            <div  className="row">
                {listaProduse}
            </div>
        )
    }
}

export default Produse