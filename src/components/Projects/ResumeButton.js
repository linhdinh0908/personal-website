import { Button, Modal } from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Resume from "../../assets/Resume.pdf";
import styled from "styled-components";


const PDF =styled.iframe`
  height: 550px;  
`

function ResumeButton() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View My Resume
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Linh Dinh's Resume</Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>
        <PDF src={Resume}
            scrolling="auto"/>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <a href={Resume} name="Linh Dinh Resume">
            <Button variant="primary" onClick={handleClose}>
              Download
            </Button>
          </a>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResumeButton;