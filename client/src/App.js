import React, { Component } from 'react';


import SearchResults from './components/SearchResults';
import SearchForm from './components/SearchForm';
import Artist from './components/Artist';
import Master from './components/Master';
import Label from './components/Label';
import Release from './components/Release';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class App extends Component {
  render() {
    return (
      <div className = 'main'>
        <Container>
          <Row>
            <Col>
              <SearchForm />
              <SearchResults/>
              <Artist/>
              <Master/>
              <Label/>
              <Release/> 
            </Col>
          </Row> 
        </Container> 
      </div>
    );
  }
}

export default App;
