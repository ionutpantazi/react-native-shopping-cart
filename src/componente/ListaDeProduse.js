import React from 'react';
import { Row, Col, Card, Tooltip, Modal } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
class Produse extends React.Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };
    render() {
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
                        <Tooltip title="adauga in cos">
                            <IconFont type="icon-iconaddtocart" style={{ fontSize: '30px' }} onClick={(click) => this.props.handleAdauga(click, produs)}/>
                        </Tooltip>,
                        <Tooltip title="detalii">
                            <IconFont type="icon-tariffdetails" style={{ fontSize: '30px' }} onClick={this.showModal}/>
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
            </div>
        )
    }
}

export default Produse