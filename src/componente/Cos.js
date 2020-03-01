import React from 'react';
class Cos extends React.Component {
    render() {
        const { cosProduse } = this.props;
        return (
            <div>
                {cosProduse.length > 0 &&
                    <div>
                        <div>
                            {cosProduse.map(item => (
                                <div key={item.id}>
                                    <button onClick={(click) => this.props.handleSterge(click, item)}>sterge</button>
                                    <span>{item.nume}</span>
                                    <img src={item.imagine} alt={item.title} style={{ width: 50, height: 50 }} />
                                    <button onClick={(click) => this.props.handlePlus(click, item)}>+</button>
                                    <button onClick={(click) => this.props.handleMinus(click, item)}>-</button>
                                    {item.totalProduse} x {item.pret} = {item.totalProduse * item.pret}
                                </div>))
                            }
                        </div>
                        <span>Total: {cosProduse.reduce((a, c) => (a + c.pret * c.totalProduse), 0)}
                        </span>
                        <button onClick={(click) => this.props.handlePlateste()}>plateste</button>
                    </div>
                }
            </div>
        )
    }
}

export default Cos