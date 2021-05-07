import { useState } from "react";
import "../css/Contact.css";
import { Accordion, Card, Button, Modal } from "react-bootstrap";
import { BiTrash, BiEdit } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDeleteContact }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Accordion className="center">
      <Card style={{ width: "30rem" }}>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete {contact.firstName}{" "}
              {contact.lastName}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => onDeleteContact(contact.id)}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <span>
            {contact.firstName} {contact.lastName}
          </span>
          <span className="float-right">
            <Link to={`/editContact/${contact.id}`}>
              <BiEdit />
            </Link>

            <Link onClick={handleShow}>
              <BiTrash />
            </Link>
          </span>

          <div>
            <span>
              <FaPhoneAlt />
            </span>
            {contact.phone}
          </div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {" "}
            <span>
              <MdEmail />
            </span>
            {contact.email}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default Contact;
