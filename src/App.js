import React, { useState } from 'react';
import Produse from "./componente/ListaDeProduse";
import Cos from "./componente/Cos";
import './App.css';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';




const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(false);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>cosul de cumparaturi</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Cosul de cumparaturi</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cosProduse: [],
      produse: [],
      produseRezultate: []
    }
  }
  componentWillMount() {
    fetch("produse.json")
      .then(res => res.json())
      .then(data => {
         this.setState({ produse: data })
         this.produseRezultate()
      })
    .catch(err => {alert("baza de date nu a fost gasita")})
  }

  handleSterge = (click,produs) => {
    this.setState(state => {
      const a = state.cosProduse.filter(a => a.id !== produs.id)
      return { cosProduse: a }
    })
  }

  handleAdauga = (click, produs) => {
    this.setState(state => {
      const a = state.cosProduse
      let dejaAdaugat = false

      a.forEach(b => {
        if (b.id === produs.id) {
          dejaAdaugat = true;
          alert("deja adaugat")
        }
      })
      if (!dejaAdaugat) {
        a.push({ ...produs, totalProduse: 1 })
      }
      return { cosProduse: a }
    })
  }

  handlePlus = (click, produs) => {
    this.setState(state => {
      const a = state.cosProduse
      a.forEach(cp => {
        if (cp.id === produs.id) {
          cp.totalProduse += 1
        }
      })
      return { cosProduse: a }
    })
  }

  handleMinus = (click, produs) => {
    this.setState(state => {
      const a = state.cosProduse
      a.forEach(x => {
        if (x.id === produs.id) {
          x.totalProduse -= 1
          if (x.totalProduse <= 0) {
            x.totalProduse =1
          }
        }
      })
      return { cosProduse: a }
    })
  }

  handlePlateste = (click) => {
    this.setState(state => {
      return { cosProduse: [] }
    })
    alert("cumparat")
  }

  produseRezultate = () => {
    this.setState(state => {
      return { produseRezultate: state.produse }
    })
  }

  render() {
    return(
      
      <div>
        
        <Produse
          produse={this.state.produseRezultate}
          handleAdauga={this.handleAdauga}
        />
        
        <ExampleToast className="toast">
        <Cos
          cosProduse={this.state.cosProduse}
          handleSterge={this.handleSterge}
          handlePlus={this.handlePlus}
          handleMinus={this.handleMinus}
          handlePlateste={this.handlePlateste}
        />
      </ExampleToast>
      </div>
    )
  }
}



export default App;
