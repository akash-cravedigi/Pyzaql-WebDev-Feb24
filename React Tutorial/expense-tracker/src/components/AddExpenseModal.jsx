import { useEffect, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useIndexedDB } from "react-indexed-db-hook";

function AddExpenseModal(props) {
    const { add } = useIndexedDB("expenses");
    const [expense, setExpense] = useState();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addNewExpense = () => {
        let name = document.getElementById("name").value;
        let category = document.getElementById("category").value;
        let amount = document.getElementById("amount").value;
        let date = document.getElementById("date").value;

        if(name && category && amount && date) {
            const newExpense = {
                name: name,
                category: category,
                amount: amount,
                date: date
            };
    
            add(newExpense)
                .then(() => {
                    console.log(newExpense)
                    setExpense(newExpense); // Update local state after successfully adding expense
                    handleClose(); // Close the modal
                    props.onExpenseAdded(); // Call the parent component's callback
                })
                .catch(error => {
                    console.log(error);
                });
            }
    };

    return (
        <>
        <Button variant="danger" onClick={handleShow} className='fw-bold px-5 py-3'>Add Expense</Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Adding new expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Expense Name</Form.Label>
                        <Form.Control id='name' type="text" required />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select id='category' aria-label="Default select example" required>
                            <option>Select a category</option>
                            <option value="travel">Travel</option>
                            <option value="food">Food</option>
                            <option value="bills">Bills</option>
                            <option value="leisure">Leisure</option>
                            <option value="home">Home</option>
                            <option value="pets">Pets</option>
                            <option value="education">Education</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="entertainment">Entertainment</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Amount (in Rupees)</Form.Label>
                        <Form.Control id="amount" type="number" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control id="date" type="date" required />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={addNewExpense}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default AddExpenseModal;