import React from 'react';
import { DeleteOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Empty } from 'antd';
import { Button } from 'antd';
class Cos extends React.Component {
    render() {
        const { cosProduse } = this.props;
        return (
            <div>
            {cosProduse.length === 0 &&
                 <Empty
                    description={
                        <span>Cosul de cumparaturi este gol</span>
                    }
                 />
            }
                {cosProduse.length > 0 &&
                    <div>
                        <br />
                        <table>
                            <thead key="thead">
                                <tr key="trow">
                                    <th key="th1" colSpan="3">Produs</th>
                                    <th key="th2" colSpan="3">Cantitate</th>
                                    <th key="th3">Pret total</th>
                                </tr>
                            </thead>
                        {cosProduse.map(item => (
                            <tbody key="tbody">
                                <tr>
                                    <td width="3%"><DeleteOutlined style={{ fontSize: '20px' }} onClick={(click) => this.props.handleSterge(click, item)} /></td>
                                    <td width="10%"><img src={item.imagine} alt={item.title} style={{ width: 50, height: 50 }} /></td>
                                    <td width="25%"><span>{item.nume}</span></td>
                                    
                                    <td width="5%"><PlusCircleOutlined style={{ fontSize: '20px' }} onClick={(click) => this.props.handlePlus(click, item)} /></td>
                                    <td width="5%">{item.totalProduse}</td>
                                    <td width="5%"><MinusCircleOutlined style={{ fontSize: '20px' }} onClick={(click) => this.props.handleMinus(click, item)} /></td>
                                    <td width="12%">{(Math.round(item.pret * item.totalProduse * 100) / 100).toFixed(2)} lei</td>
                                </tr>
                            </tbody>
                            ))}
                        </table>
                        <hr></hr>
                        Total: {(Math.round(cosProduse.reduce((a, c) => (a + c.pret * c.totalProduse), 0) * 100) / 100).toFixed(2)} lei
                        
                        <Button style={{float:'right'}} type="primary" onClick={(click) => this.props.handlePlateste()}>plateste</Button>
                    </div>
                }
            </div>
        )
    }
}

export default Cos