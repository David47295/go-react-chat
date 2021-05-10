import React from 'react';

class PokemonCard extends React.Component {
    render() {
        return (
            <div key={this.props.id} className="pokedex-card">
                <p className="dex-id">{this.props.id}</p>
                <div className="image border border-dark rounded"></div>
                <div>
                    <p className="name">{this.props.name}</p>
                    <span className="types">{this.props.types}</span>
                </div>

            </div>
        )
    }
}

export default PokemonCard;