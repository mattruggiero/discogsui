import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';



export default function Title(text) {
        const retVal = 'Discogs';
        return(
            <Jumbotron fluid>
                <h1>{retVal}</h1>
            </Jumbotron>
        )
    
}
