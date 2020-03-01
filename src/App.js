import React, { useState } from 'react';
import Produse from "./componente/ListaDeProduse";
import Cos from "./componente/Cos";
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown'




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
      .catch(err => { alert("baza de date nu a fost gasita") })
  }

  handleSterge = (click, produs) => {
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
            x.totalProduse = 1
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
    return (

      <div>
        <nav class="navbar navbar-light bg-light fixed-top shadow-sm p-3 mb-5 bg-white rounded">
          <span class="text-info h1">Magazinul Online</span>
          <Dropdown>
          
          <Dropdown.Toggle style={{backgroundColor: 'transparent', border:'none'}} >
          <span class="fa-stack fa-2x has-badge" data-count="0">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            
              <Dropdown.Header><Cos
              cosProduse={this.state.cosProduse}
              handleSterge={this.handleSterge}
              handlePlus={this.handlePlus}
              handleMinus={this.handleMinus}
              handlePlateste={this.handlePlateste}
            /></Dropdown.Header>
            
            
          </Dropdown.Menu>
        </Dropdown>
        </nav>
        <div class="produse">
          <Produse
            produse={this.state.produseRezultate}
            handleAdauga={this.handleAdauga}
          />
        </div>
        
  
        
        
      </div>
    )
  }
}



export default App;
