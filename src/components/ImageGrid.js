import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, } from 'react-bootstrap';
import ModelImage from '../components/ModelImage';

class ImageGrid extends React.Component {
    render() {
        return (
            <Container>
                <Row >
                    <Col>
                        <ModelImage url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />

                    </Col>
                    <Col>
                        <ModelImage url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />

                    </Col>
                    <Col>
                        <ModelImage url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />

                    </Col>
                </Row>

                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>

                <Row >
                    <Col>1 of 3</Col>
                    <Col >2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>

                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        );
    }
}

export default ImageGrid;
