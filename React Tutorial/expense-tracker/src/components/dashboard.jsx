import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Dashboard = (props) => {
    const [earningAmount, setEarningAmount] = useState(0);
    const [expenseAmount, setExpenseAmount] = useState(0);

    useEffect(() => {
        if (props.earnings) {
            const totalEarning = props.earnings.reduce((acc, earning) => acc + parseInt(earning.amount), 0);
            setEarningAmount(totalEarning);
        }

        if (props.expenses) {
            const totalExpense = props.expenses.reduce((acc, expense) => acc + parseInt(expense.amount), 0);
            setExpenseAmount(totalExpense);
        }
    }, [props.earnings, props.expenses]);

    return (
        <>
            <Container fluid className="rounded-3 bg-info">
                <Row>
                    <Col>Current Balance</Col>
                    <Col>₹{earningAmount - expenseAmount}/-</Col>
                </Row>
                <Row>
                    <Col>Total Earnings</Col>
                    <Col>₹{earningAmount}/-</Col>
                </Row>
                <Row>
                    <Col>Total Expenses</Col>
                    <Col>₹{expenseAmount}/-</Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;
