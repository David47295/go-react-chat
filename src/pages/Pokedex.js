import React from 'react';
import PokemonCard from '../components/Pokedex/PokemonCard';
import PokemonData from '../sample_pokemon.json'
import { Col, Container, Form, Row } from 'react-bootstrap';
import '../style/Pokedex.css'

class Pokedex extends React.Component {
    onOrderModeSelect(key, event) {
        console.log(event);
        console.log(key);
    }

    render() {
        const PokemonList = PokemonData.pokemon.map((x) => {
            return <PokemonCard id={x.id} key={x.id} name={x.name} types={x.types} />
        });
        console.log(PokemonList);
        return (
            <div id="pokedex">
                <Container fluid>
                    <b>Pokedex</b>

                    <Row>
                        <Col lg={8}>
                            <p>Welcome to the Serebii.net Pokedex! To view more in-depth information about a Pokemon, click on one below.</p>
                            <p>You can also refine the list of Pokemon using the Search Options Tab</p>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.order-selector">
                                    <Form.Label>Order</Form.Label>
                                    <Form.Control as="select" className="form-select">
                                        <option>National Dex Order (Increasing)</option>
                                        <option>National Dex Order (Decreasing)</option>
                                        <option>Alphabetically (A-Z)</option>
                                        <option>Alphabetically (Z-A)</option>
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
            </div>
        )
    }
}

export default Pokedex;