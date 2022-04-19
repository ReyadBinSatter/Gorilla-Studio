import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import g1 from '../../img/gallery/g1.jpg';
import g2 from '../../img/gallery/g2.jpg';
import g3 from '../../img/gallery/g3.jpg';
import g4 from '../../img/gallery/g4.jpg';
import g5 from '../../img/gallery/g5.jpg';
import g6 from '../../img/gallery/g6.jpg';
import g7 from '../../img/gallery/g7.jpg';
import g8 from '../../img/gallery/g8.jpg';
import g9 from '../../img/gallery/g9.jpg';
import g10 from '../../img/gallery/g10.jpg';
import g11 from '../../img/gallery/g11.jpg';
import g12 from '../../img/gallery/g12.jpg';

const Gallery = () => {
    return (
        <div>
            <Container>
                <Row className='my-3'>
                    <Col><img className='w-100 h-100 ' src={g1} alt="" /></Col>
                    <Col><img className='w-100 h-100 ' src={g2} alt="" /></Col>
                </Row>
                <Row className='my-3'>
                    <Col><img className='w-100 h-100' src={g7} alt="" /></Col>
                    <Col><img className='w-100 h-100' src={g8} alt="" /></Col>
                    <Col><img className='w-100 h-100' src={g9} alt="" /></Col>
                </Row>
                <Row className='my-3'>
                    <Col><img className='w-100 h-100' src={g3} alt="" /></Col>
                    <Col><img className='w-100 h-100' src={g4} alt="" /></Col>
                </Row>
                <Row className='my-3'>
                    <Col><img className='w-100 h-100' src={g10} alt="" /></Col>
                    <Col><img className='w-100 h-100' src={g11} alt="" /></Col>
                    <Col><img className='w-100 h-100' src={g12} alt="" /></Col>
                </Row>
                <Row className='my-3'>
                    <Col><img className='w-100 h-100' src={g5} alt="" /></Col>
                    <Col><img className='w-100 h-100' src={g6} alt="" /></Col>
                </Row>
                
                
            </Container>
        </div>
    );
};

export default Gallery;