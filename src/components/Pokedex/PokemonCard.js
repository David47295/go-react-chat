import React from 'react';
import { matchPath } from 'react-router-dom';

class PokemonCard extends React.Component {
    constructor(props) {
        super(props);
        this.onCardClick = this.onCardClick.bind(this);
    }

    onCardClick(event) {
        console.log("Clicked")
        const match = matchPath(`/pokedex/${this.props.id}`, {
            path: "/pokedex/:id",
            exact: true,
            strict: false
        })
        if (match) {
            console.log(match);
            this.props.history.push(match.url);
        } else {
            console.error("Error: Pokemon Id is invalid!")
        }
    }

    render() {
        return (
            <div key={this.props.id} className="pokedex-card" onClick={this.onCardClick}>
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