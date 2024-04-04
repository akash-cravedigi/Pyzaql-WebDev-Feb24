import { Container, Row, Col } from 'react-bootstrap';
import AddEarningModal from './components/AddEarningModal';
import AddExpenseModal from './components/AddExpenseModal';
import React,{useState, useEffect} from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';
import ListEarningItem from './components/ListEarningItem.jsx';
import ListExpenseItem from './components/ListExpenseItem.jsx';
import Dashboard from './components/dashboard';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState();
    const [earnings, setEarnings] = useState();

    const { getAll } = useIndexedDB("expenses");
    const { getAll:getAllEarnings } = useIndexedDB("earnings");

    const handleExpenseAdded = () => {
        getAll().then((ExpensesFromDB) => {
            setExpenses(ExpensesFromDB);
        });
    };
    const handleEarningAdded = () => {
        getAllEarnings().then((EarningsFromDB) => {
            setEarnings(EarningsFromDB);
        });
    };

    useEffect(() => {
        handleEarningAdded();
        handleExpenseAdded();
    },[]);
    
    return(
        <>
            <Dashboard earnings={earnings} expenses={expenses}/>
            <Container fluid>
                <Row className="justify-content-center my-5">
                    <Col className="text-center"><AddEarningModal onEarningAdded={handleEarningAdded} /></Col>
                    <Col className="text-center"><AddExpenseModal onExpenseAdded={handleExpenseAdded} /></Col>
                </Row>
            </Container>
            <Container fluid >
            </Container>

            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <h2>Earnings</h2>
                        {earnings && earnings.map((earning) => (
                            <ListEarningItem key={earning.id} earning={earning} />
                        ))}
                    </Col>
                    <Col>
                        <h2>Expenses</h2>
                        {expenses && expenses.map((expense) => (
                            <ListExpenseItem key={expense.id} expense={expense} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ExpenseTracker;