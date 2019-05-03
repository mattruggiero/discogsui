import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as api from '../middleware/api';
import ListGroup from 'react-bootstrap/ListGroup';


class SearchResults extends Component {
   
    handleOnClick = event => {
        console.log(event.type);
        api.apiSearch(event.id,event.type,event.type);
    }

    render(){
        let data = this.props.searchResults.data;
        let shouldDisplay = this.props.display === 'SearchResults';
        let  gotResults = (JSON.stringify(this.props.searchResults).length !== 2 && shouldDisplay);
        let returnValue = "";
        
        if (gotResults){
            returnValue = data.results.map(each => {
                return(
                    <ListGroup.Item action key = {each.id * Math.random()} onClick = {this.handleOnClick.bind(this,each)}>
                        <img 
                            className = 'thumbnail'
                            src = {each.thumb || '../disc.png'}
                            alt = 'Uh oh'/>
                            <div className = 'list_text_master'>
                                <p className = 'list_text'>{each.title}</p>
                                <p className = 'list_text'>{each.type}</p>
                            </div>

                    </ListGroup.Item>
                )
        })}
       
       let final = shouldDisplay?
            <div className = 'list'><ListGroup>{returnValue}</ListGroup></div>
                     : " "
       return(<div>{final}</div>)
       
    }
}


const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        transformedResults: state.transformedResults,
        display: state.display
    };
};
export default connect(mapStateToProps)(SearchResults);