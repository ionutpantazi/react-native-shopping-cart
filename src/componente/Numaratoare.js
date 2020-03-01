import React from 'react'
class Numar extends React.Component {
    render() {
        const { cosProduse } = this.props;
        return (
            // Font Awesome Icon with number badge/label: https://codepen.io/jmalatia/pen/MJaVxL
            <div class="fa-stack fa-2x has-badge" data-count={cosProduse.length}>
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </div>
        )
    }
}

export default Numar