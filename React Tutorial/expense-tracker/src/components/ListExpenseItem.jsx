import Card from 'react-bootstrap/Card';

function ListExpenseItem (props) {
  return (
    <Card className="mb-3 border-3" border="danger">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
              <Card.Text>{props.expense.name}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">{props.expense.category}</Card.Subtitle>
          </div>
          <div>
              <Card.Title className="text-end">₹{props.expense.amount}/-</Card.Title>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
          <small className="text-muted">Date: {props.expense.date}</small>
      </Card.Footer>
    </Card>
  );
}

export default ListExpenseItem;