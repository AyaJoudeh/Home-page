import React from 'react';
import BranchesDes from './BranchesDes';
import './branches.css';
import {Row,Col} from 'react-bootstrap';
import RightSide from './rightSide';
import LeftSide from './leftSide';

const Branches = () => {
    return ( <div>
        <BranchesDes />
        <Row>
           <Col><LeftSide /></Col>
            <Col><RightSide /></Col>  
        </Row>
        
    </div> );
}
 
export default Branches;