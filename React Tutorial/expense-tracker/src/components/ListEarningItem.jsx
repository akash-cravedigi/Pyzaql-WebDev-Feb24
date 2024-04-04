import Card from 'react-bootstrap/Card';

function ListEarningItem (props) {
  return (
    <Card className="mb-3 border-3" border="danger">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
              <Card.Text>{props.earning.name}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">{props.earning.category}</Card.Subtitle>
          </div>
          <div>
              <Card.Title className="text-end">₹{props.earning.amount}/-</Card.Title>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
          <small className="text-muted">Date: {props.earning.date}</small>
      </Card.Footer>
    </Card>
  );
}

export default ListEarningItem;