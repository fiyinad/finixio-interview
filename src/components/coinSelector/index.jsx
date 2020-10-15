import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const coinSelector = props => {
    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={props.addUpdateCoinHandler}>
                        <Form.Group as={Row} controlId="frmCoinSelector">
                            <Col sm="2" className="text-center">
                                <Form.Label>Coin</Form.Label>
                            </Col>
                            <Col sm="8">
                                <Form.Control as="select" name="currency"  custom>
                                    {props.coinList.map((el, id) => (<option key={id}>{el}</option>))}
                                </Form.Control>
                            </Col>
                            <Col sm="2">
                                <Button variant="primary" type="submit">Add/Update</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default coinSelector;