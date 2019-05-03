import React, { Component } from 'react';
import { connect } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Tracklist from './Tracklist';
import * as helper from './helper';
import Gallery from 'react-grid-gallery';


class Release extends Component {
    render(){
        let shouldDisplay = this.props.display === 'release';
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
                        <h1>{data.artists[0].name}</h1>
                        <h2>{data.title}</h2>
                    </Jumbotron>
                </Container>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col><Image src = {img[0].src} fluid/></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col><hr/></Col>
                    </Row>
                
                    <Row>
                        <Col>
                        
                <Tabs defaultActiveKey = 'Tracklist'>
                    
                    <Tab eventKey = 'Tracklist' title = 'Tracklist'>
                        <Row>
                            
                            <Col>Title: </Col>
                            <Col></Col>
                            <Col>Duration: </Col>
                            
                        </Row>
                        <hr/>
                        <Tracklist tracks = {data.tracklist}/>
                    </Tab>
                    <Tab eventKey = 'Info' title = 'Info'>
                        <Row>
                            <Col>Artist: </Col>
                            <Col>Title: </Col>
                            <Col>Year Released: </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col>{data.artists[0].name}</Col>
                            <Col>{data.title}</Col>
                            <Col>{data.year}</Col>
                        </Row>
                    </Tab>
                    <Tab eventKey = 'Notes' title = 'Notes'>
                        <Row>
                            <Col>{data.notes_plaintext}</Col>
                        </Row>
                        <hr/>
                    </Tab>
                    <Tab eventKey = 'Pictures' title = 'Pictures'>
                        {grid}
                    </Tab>
                    <Tab eventKey = 'Format' title = 'Format'>
                        <Row>
                            <Col>{data.formats[0].name || ""}</Col>
                        </Row>
                        <Row>
                            <Col>{data.formats[0].descriptions[0] || ""}</Col>
                        </Row>
                        <Row>
                            <Col>{data.formats[0].text || ""}</Col>
                        </Row>
                     </Tab>
                    
                </Tabs>
                </Col>
                </Row>
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
export default connect(mapStateToProps)(Release);