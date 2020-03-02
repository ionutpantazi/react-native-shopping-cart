import React, { useState } from 'react';
import Produse from "./componente/ListaDeProduse";
import Cos from "./componente/Cos";
import Numar from "./componente/Numaratoare";
import "antd/dist/antd.css";
import { Drawer, Button } from 'antd';
import { Divider } from 'antd';
import './App.css';







class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cosProduse: [],
      produse: [],
      produseRezultate: [],
      visible : false 
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
    this.showDrawer()
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

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

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
        <div onClick={this.showDrawer}>
          <Numar cosProduse={this.state.cosProduse} />
        </div>
        <Divider />
        <div class="produse">
          <Produse
            produse={this.state.produseRezultate}
            handleAdauga={this.handleAdauga}
          />
        </div>
        <Drawer
          title="Cosul de cumparaturi"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Cos
            cosProduse={this.state.cosProduse}
            handleSterge={this.handleSterge}
            handlePlus={this.handlePlus}
            handleMinus={this.handleMinus}
            handlePlateste={this.handlePlateste}
          />
        </Drawer>
        <Divider />
        Site creat de mine
      </div>
    )
  }
}



export default App;