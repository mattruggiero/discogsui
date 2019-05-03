import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import * as api from '../middleware/api';

class SearchForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchInput: null,
      filter: 'All',
      }
    this.handleRadio = this.handleRadio.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate = (prevProps, prevState) => {
    let filterChanged = (prevState.filter !== this.state.filter);
    let mtInput = (
      this.state.searchInput === null ||
      this.state.searchInput.length === 0
    );
    if(filterChanged && !mtInput){
      api.apiSearch(this.state.searchInput,this.state.filter,'SearchResults');
    }
  }
    
  handleRadio = (event) => {this.setState({filter:event.target.id});}

  handleTyping = (event) => {
    event.preventDefault();
    this.setState({
    searchInput: ""+event.target.value,
    })}

  handleSubmit = (event) => {
    event.preventDefault();
    api.apiSearch(this.state.searchInput, this.state.filter,'SearchResults');
   }

  render(){
    let filterName = ['All', 'Artist', 'Master','Release','Label'];
    let radios = filterName.map(each =>{
    return(
      <Col>
      <Form.Check 
        onChange = {this.handleRadio}
        checked = {each === this.state.filter}
        type = 'radio'
        custom inline
        key = {each} 
        label = {each}
        id = {each}/>
      </Col>
      );
    });

    return(
      <Container>
      <Form onSubmit = {this.handleSubmit}>
        <Row>
          {radios}
        </Row>
        <Row>
        <Col>
        <Form.Control
          required = {true}
          onChange = {this.handleTyping} 
					type = "text" 
          name = "bandname"
          placeholder = 'Search for artist, band, or label'/>
          
          </Col>
        <Col sm = {2} md = {2} lg = {2}>
				<Button 
					variant = "primary"
          type = 'submit'
          >
					SEARCH  
				</Button>
        </Col>
        
        
        
        </Row>
      </Form>
      </Container>
      
    )
    }
}



export default SearchForm;