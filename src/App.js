import React, { useState } from 'react';
import Produse from "./componente/ListaDeProduse";
import Cos from "./componente/Cos";
import Numar from "./componente/Numaratoare";
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
          
          
          
          <div class="dropleft">
            <div id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <Numar cosProduse={this.state.cosProduse} />
            </div>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{width:'600px'}}>
              <Cos              
                cosProduse={this.state.cosProduse}
                handleSterge={this.handleSterge}
                handlePlus={this.handlePlus}
                handleMinus={this.handleMinus}
                handlePlateste={this.handlePlateste}
              />
            </div>
          </div>
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

/*<Dropdown>
            <Dropdown.Toggle style={{backgroundColor: 'transparent', border:'none'}} >
              <Numar cosProduse={this.state.cosProduse} />
            </Dropdown.Toggle>
          <Dropdown.Menu class="shadow-lg p-3 mb-5 bg-white rounded">
            <Dropdown.Header>
              <Cos              
                cosProduse={this.state.cosProduse}
                handleSterge={this.handleSterge}
                handlePlus={this.handlePlus}
                handleMinus={this.handleMinus}
                handlePlateste={this.handlePlateste}
              />
            </Dropdown.Header>
          </Dropdown.Menu>
        </Dropdown>*/