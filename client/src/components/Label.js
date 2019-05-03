import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Gallery from 'react-grid-gallery';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import * as helper from './helper';


class Label extends Component {
    render(){
      let shouldDisplay = this.props.display === 'label';
      let  gotResults = (
        JSON.stringify(this.props.searchResults).length !== 2 && shouldDisplay);
      let retVal = "";
      let data = this.props.searchResults.data;
      if(gotResults){
        let img = helper.hasImage(data.images);
        let grid = (img.length -1 ? <Gallery images = {img}/>:'No Pictures for you')
        retVal = (
          <div>
            <Container>
              <Jumbotron fluid>
                <h1>{data.name}</h1>
              </Jumbotron>
            </Container>
            <Container>
              <Row>
                <Col></Col>
                <Col><Image src = {img[0].src} alt = 'No Pic'/></Col>
                <Col></Col>
              </Row>
              <Row>
            <Col><hr/></Col>
              </Row>
            </Container>
            <Container><Row><Col>
              <Tabs defaultActiveKey = 'Profile'>
                <Tab eventKey = 'Profile' title = 'Profile'>
                  <Row>
                    <Col>{data.profile_plaintext}</Col>
                  </Row>
                </Tab>
                <Tab eventKey = 'Pictures' title = 'Pictures'>
                  {grid}
                </Tab>
                <Tab eventKey = 'Contact' title = 'Contact'>
                  <Row>
                  	<Col>{data.contact_info_plaintext || 'Not Listed'}</Col>
                      </Row>
                </Tab>
                </Tabs>
                	</Col></Row></Container>
              </div>
            )
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
export default connect(mapStateToProps)(Label);