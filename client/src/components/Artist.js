import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gallery from 'react-grid-gallery';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import * as helper from './helper';



class Artist extends Component {
    render(){
      let data = this.props.searchResults.data;
      let shouldDisplay = this.props.display === 'artist';
      let  gotResults = (
        JSON.stringify(this.props.searchResults).length !== 2 && shouldDisplay);
      let retVal = "";
        
      if(gotResults){
        let img = helper.hasImage(data.images);
        let grid = (img.length -1 ? <Gallery images = {img}/>:'No Pictures for you')
            
        retVal = (
          <div>
            <Container>
              <Jumbotron>
                <h1>{data.name}</h1>
              </Jumbotron>
            	<Row>
                <Col></Col>
                <Col><Image src = {img[0].src} alt = 'No Pic' rounded/></Col>
                <Col></Col>
              </Row>
              <Row>
                <Col><hr/></Col>
              </Row>
                
              <Tabs defaultActiveKey = 'Profile'>
                <Tab eventKey = 'Profile' title = 'Profile'>
                  <Row>
                    <Col>{data.profile_plaintext}</Col>
                  </Row>
                  </Tab>
                  <Tab eventKey = 'Pictures' title = 'Pictures'>
                    {grid}
                  </Tab>
                </Tabs>
              </Container>
            </div>
					);
        }
        return(
            <div>{retVal}</div>
            );
    }
}


const mapStateToProps = state => {
    return {
      searchResults: state.searchResults,
      display: state.display
    };
};
export default connect(mapStateToProps)(Artist);