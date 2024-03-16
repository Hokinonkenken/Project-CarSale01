import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clickEvent = (event: any) => {
    setIsLoggedIn(!isLoggedIn);
    handleClose();
  };
  if (isLoggedIn) {
    return (
      <>
        <Button onClick={clickEvent} variant="info">
          Logout
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {" "}
          Login{" "}
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" />
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={clickEvent}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};
export default ConditionalRendering;
