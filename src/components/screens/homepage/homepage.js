import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../styles/style.css';
import { Row, Col} from 'react-bootstrap';
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
const Homepage =()=>{
    return(
        <div>
         <Row>
            <Col className="firstColumn" xs={2}>
               <SectionOne/>
            </Col>
            {/* next column */}
            <Col style={{backgroundColor: '#F8F8FA'}}xs={7}>
                <SectionTwo/>
            </Col>
            {/* next column */}
            <Col style={{backgroundColor: 'white'}} >
                <SectionThree/>
            </Col>
        </Row>
        </div>
    )
}

export default Homepage;