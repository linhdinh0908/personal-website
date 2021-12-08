import { Button, Modal } from "react-bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Resume from "../../assets/Resume.pdf";

function ResumeButton() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View My Resume
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Linh Dinh's Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <embed src={Resume}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <a href={Resume}>
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