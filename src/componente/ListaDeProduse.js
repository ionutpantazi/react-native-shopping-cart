import React from 'react';
import { Row, Col, Card, Tooltip, Modal, Layout, Rate  } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
class Produse extends React.Component {
    state = { visible: false, modal: [] };
    showModal = (click , produs) => {
        this.setState(state => {
            return {
              modalImagine : produs.imagine,
              modalDescriere : produs.descriere,
              modalNume : produs.nume,
              modalRating : produs.rating,
              modalData : produs.data,
              visible:true
            }
        })
      }
    handleCancel = e => {
        this.setState({
          visible: false,
        });
    };
    render() {
        const { Footer, Sider, Content } = Layout;
        const { modalImagine , modalDescriere , modalNume , modalRating , modalData } = this.state
        const { Meta } = Card;
        const IconFont = createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1697557_irzp4mqx6t8.js',
          });
        const listaProduse = this.props.produse.map(produs => (
            <Col xs={{ span: 12 }} lg={{ span: 8 }} >
                <Card
                    hoverable
                    cover={
                        <img
                            src={produs.imagine}
                            alt={produs.nume}
                            style={{ width: '80%', margin: '20px' }}
                        />
                    }
                    actions={[
                        <Tooltip title="adauga in cos" trigger="hover , click">
                            <IconFont type="icon-iconaddtocart" style={{ fontSize: '30px' }} onClick={(click) => this.props.handleAdauga(click, produs)}/>
                        </Tooltip>,
                        <Tooltip title="detalii" trigger="hover , click">
                            <IconFont type="icon-tariffdetails" style={{ fontSize: '30px' }} onClick={(click) => this.showModal(click, produs)}/>
                        </Tooltip>
                    ]}  
                >
                    <Meta
                        title={produs.nume}
                        description={produs.pret+' lei/kg'}
                    />
                </Card>
            </Col>
        ))
        return (
            <div>
                <Row justify="space-around" align="middle" gutter={[24, 24]}>
                    {listaProduse}
                </Row>
                <Modal
                    title={modalNume}
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.handleCancel}
                    width={400}
                >
                    <Layout>
                        <Layout>
                        <Sider>
                            <img src={modalImagine} alt={modalImagine} style={{ width: 200, height: 200 }} />
                        </Sider>
                        <Content style={{backgroundColor: "white"}}>
                            {modalDescriere}
                        </Content>
                        </Layout>
                        <Footer style={{backgroundColor: "white", height: "70px", textAlign: "center"}}>
                            <span>Rating:{' '}<Rate disabled value={modalRating} /></span><br />
                            <span>Data adaugata: {modalData}</span>
                        </Footer>
                    </Layout>
                </Modal>
            </div>
        )
    }
}

export default Produse