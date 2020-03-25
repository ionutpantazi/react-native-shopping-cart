import React from 'react';
import Produse from "./componente/ListaDeProduse";
import Cos from "./componente/Cos";
import Numar from "./componente/NumarCos";
import Filtru from "./componente/Filtru";
import { Drawer , message , Layout , Button  } from 'antd';
import "antd/dist/antd.css";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cosProduse: [],
      produseRezultate: [],
      visible : false,
      sortat : "nume",
    }
  }
  componentDidMount() {
    fetch("produse.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ produse: data })
        this.produseRezultate()
      })
      .catch(err => {this.mesajEroare2()})
  }

  mesajEroare1 = () => {
    message.error('Acest produs a fost deja adaugat');
  }

  mesajEroare2 = () => {
    message.error('Baza de date nu a fost gasita');
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
          this.mesajEroare1()
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
      if (state.sortat === "pret") {
        state.produse.sort((a, b) => (a.pret > b.pret) ? 1 : -1)
      }
      else if (state.sortat === "nume") {
        state.produse.sort((a, b) => (a.nume > b.nume) ? 1 : -1)
      }
      else if (state.sortat === "data") {
        state.produse.sort((a, b) => (a.data > b.data) ? 1 : -1)
      }
      return { produseRezultate: state.produse }
    })
  }

  handleSortare = (event) => {
    this.setState({ sortat: event });
    this.produseRezultate();
  };

  render() {
    const { Header, Footer, Content } = Layout;
    const data = this.state.cosProduse
    console.log(this.state)
    return (
      <Layout>
        <Header className="header">
          <span onClick={this.showDrawer}>
            <Numar cosProduse={this.state.cosProduse} />
          </span>
        </Header>
        <Content className="content">
          <div className="filtru">
            <Filtru handleSortare={this.handleSortare} />
          </div>
          <br />
          <Produse
            produse={this.state.produseRezultate}
            handleAdauga={this.handleAdauga}
          />
        </Content>
        <Footer className="footer">
            <a className="github-button" href="https://github.com/ionutpantazi" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" data-show-count="true" aria-label="Follow @ionutpantazi on GitHub">Follow @ionutpantazi</a>
        </Footer>
        <Drawer
          title="Cosul de cumparaturi"
          width={300}
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          footer={
            <div>
              <div style={{float:'left'}}>
                Total de plata: {(Math.round(data.reduce((a, c) => (a + c.pret * c.totalProduse), 0) * 100) / 100).toFixed(2)} lei
              </div>
              <div style={{float:'right'}}>
                <Button disabled={this.state.cosProduse == 0} 
                  onClick={this.handlePlateste} type="primary">
                  Plateste
                </Button>
              </div>
            </div>
          }
        >
          <Cos
            cosProduse={this.state.cosProduse}
            handleSterge={this.handleSterge}
            handlePlus={this.handlePlus}
            handleMinus={this.handleMinus}
            handlePlateste={this.handlePlateste}
          />
        </Drawer>
      </Layout>
    )
  }
}

export default App;