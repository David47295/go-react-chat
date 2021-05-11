import './App.css';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationBar from './components/NavigationBar'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div id="App">
      <Container fluid>
        <Row className="h-100">
          <Col sm={3}>
            <NavigationBar />
          </Col>
          <Col>
            <Router>
              <Switch>
                <Route path="/calendar">
                  
                </Route>
                <Route path="/news">
                  
                </Route>
                <Route path="/pokedex">
                  <Pokedex />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </Col>
        </Row>


      </Container>
    </div>
  );
}

export default App;
