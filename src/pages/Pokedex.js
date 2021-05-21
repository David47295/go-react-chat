import React from 'react';
import PokemonCard from '../components/Pokedex/PokemonCard';
import Details from '../components/Pokedex/Details';
import PokemonData from '../sample_pokemon.json'
import { Col, Container, Form, Row } from 'react-bootstrap';
import '../style/Pokedex.css'
import { Route, Switch } from 'react-router';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.onOrderModeSelect = this.onOrderModeSelect.bind(this);
        this.state = {
            pokemon_list: PokemonData.pokemon
        };
    }

    onOrderModeSelect(event) {
        const sort_mode = event.target.value;
        let new_list;
        switch (sort_mode) {
            case "dex_descend":
                new_list = this.state.pokemon_list.sort((a, b) => { return parseInt(b.id) - parseInt(a.id) })
                this.setState({ pokemon_list: new_list });
                break;
            case "alpha_ascend":
                new_list = this.state.pokemon_list.sort((a, b) => {
                    return (a.name > b.name ? 1 : -1)
                });
                this.setState({ pokemon_list: new_list });
                break;
            case "alpha_descend":
                new_list = this.state.pokemon_list.sort((a, b) => {
                    return (b.name > a.name ? 1 : -1)
                });
                this.setState({ pokemon_list: new_list });
                break;
            default:
                new_list = this.state.pokemon_list.sort((a, b) => { return parseInt(a.id) - parseInt(b.id) })
                this.setState({ pokemon_list: new_list });
                break;
        }
    }

    render() {
        console.log(this.props.history)
        const PokemonList = this.state.pokemon_list.map((x) => {
            return <PokemonCard id={x.id} key={x.id} name={x.name} types={x.types} history={this.props.history} />
        });
        return (
            <div id="pokedex">
                <Switch>
                    <Route path="/pokedex/:name" component={Details} />
                    <Route path="/pokedex">
                        <Container fluid>
                            <Row className="sticky-top banner">
                                <Col lg={8}>
                                    <h1>Pokedex</h1>
                                    <p>Welcome to the Serebii.net Pokedex! To view more in-depth information about a Pokemon, click on one below.</p>
                                    <p>You can also refine the list of Pokemon using the Search Options Tab</p>
                                </Col>
                                <Col>
                                    <Form>
                                        <Form.Group controlId="exampleForm.order-selector">
                                            <Form.Label>Order</Form.Label>
                                            <Form.Control as="select" className="form-select" onChange={this.onOrderModeSelect}>
                                                <option value="dex_ascend">National Dex Order (Increasing)</option>
                                                <option value="dex_descend">National Dex Order (Decreasing)</option>
                                                <option value="alpha_ascend">Alphabetically (A-Z)</option>
                                                <option value="alpha_descend">Alphabetically (Z-A)</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Col>
                            </Row>
                            <Row>
                                <div id="pokemon-list" className="flex-wrap">
                                    {PokemonList}
                                </div>
                            </Row>
                        </Container>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Pokedex;