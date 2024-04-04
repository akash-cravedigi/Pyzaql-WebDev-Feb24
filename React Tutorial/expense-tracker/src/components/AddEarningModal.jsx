import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useIndexedDB } from "react-indexed-db-hook";

function AddEarningModal(props) {
    const { add } = useIndexedDB("earnings");
    const [earning, setEarning] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addNewEarning = () => {
      let name = document.getElementById("ea-name").value;
      let category = document.getElementById("ea-category").value;
      let amount = document.getElementById("ea-amount").value;
      let date = document.getElementById("ea-date").value;
  
      if (name && category && amount && date) {
          const newEarning = {
              name: name,
              category: category,
              amount: amount,
              date: date
          };
  
          add(newEarning)
              .then(() => {
                  setEarning(newEarning); // Update local state after successfully adding earning
                  handleClose(); // Close the modal
                  props.onEarningAdded(); // Call the parent component's callback
              })
              .catch(error => {
                  console.log(error);
              });
      }
    };
  return (
    <>
      <Button variant="success" onClick={handleShow} className="fw-bold px-5 py-3">Add Earning</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding new earning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
              <Form.Label>Expense Name</Form.Label>
              <Form.Control id='ea-name' type="text" required />
          </Form.Group>
          
          <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select id='ea-category' aria-label="Default select example" required>
                <option>Select a source</option>
                <option value="salary">Salary</option>
                <option value="investment">Investment</option>
                <option value="loan">Loan</option>
                <option value="business-profits">Business Profits</option>
              </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Amount (in Rupees)</Form.Label>
              <Form.Control id="ea-amount" type="number" required />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control id="ea-date" type="date" required />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewEarning}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEarningModal;