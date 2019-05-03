import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Tracklist extends Component {
    render(){
        let returnValue = this.props.tracks.map(each =>{
            let i = 0;
            if(each.type_ === 'heading'){
                return( 
                    <Row key = {Math.random() * (++i)}>
                        <Col><h2>{each.title}</h2></Col>
                    </Row>
                )
            }
            
            return(
                //get a better key
                    <Row key = {Math.random() * (++i)}>

                          
                        <Col>{each.title}</Col>
                        <Col></Col>  
                        <Col>{each.duration || 'Not Listed'}</Col>
                        
                    </Row>
                
            )
        })
        return(returnValue);
    }
}

export default Tracklist;