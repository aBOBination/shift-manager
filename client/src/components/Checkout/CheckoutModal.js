import React from 'react';
// import styled from 'styled-components'
// import { ProductConsumer } from '../context'
// import { ButtonContainer } from './Button'
// import { Link } from 'react-router-dom'
import RadioButton from './RadioButton';
import {
  Modal,
  Button,
  ListGroup,
  Card,
  Row,
  Col,
  Container
} from 'react-bootstrap';
import './CheckoutModal.css';

// import React, { Component } from 'react'

class CheckoutModal extends React.Component {
  constructor() {
    super();
    this.state = {
      showHide: false
    };
  }
  handleModalShowHide() {
    this.setState({ showHide: !this.state.showHide });
  }
  render() {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Checkout
        </Button>

        <Modal show={this.state.showHide}>
          <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
            <Modal.Title>How You'll Pay</Modal.Title>
            <Container>
              <Row>
                <Col>
                  <RadioButton />
                </Col>
              </Row>
            </Container>
          </Modal.Header>
          <Modal.Body className="modal-container">
            <Card.Body>
              <Card.Title></Card.Title>
              <ListGroup>
                <Row>Item(s) total: ${} </Row>
                <Row>Quantity total: {} </Row>
                <hr></hr>
                <Row>
                  Total ({}item(s)) ${}
                </Row>
              </ListGroup>
            </Card.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="cancel-btn"
              variant="secondary"
              onClick={() => this.handleModalShowHide()}>
              Cancel
            </Button>
            <Button
              className="checkout-btn"
              variant="primary"
              onClick={() => this.handleModalShowHide()}>
              Proceed to checkout
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CheckoutModal;