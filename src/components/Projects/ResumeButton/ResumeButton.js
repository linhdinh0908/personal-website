import { Button, Modal } from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Resume from "../../../assets/Resume.pdf";
import styled from "styled-components";


const PDF =styled.iframe`
  height: 500px;
  width: 100%;
`

function ResumeButton() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <div className="resume-button">
      <Button variant="primary" size="lg" onClick={handleShow}>
        View My Resume
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Linh Dinh's Resume</Modal.Title>
        </Modal.Header>

        <Modal.Body></Modal.Body>
          <PDF src={Resume} name={"Linh Dinh Resume"}/>
      
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
    </div>
  );
}

export default ResumeButton;