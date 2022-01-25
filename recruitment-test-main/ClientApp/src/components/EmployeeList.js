import {Modal,Button,Alert} from 'react-bootstrap';
import React, {useContext, useState, useEffect} from 'react';
import {EmployeeContext} from '../contexts/EmployeeContext'; //EmployeeContext is in {} because it isn't export default
import Employee from './Employee';
import AddForm from './AddForm';
import Pagination from './Pagination';

const EmployeeList = () => {

    //When the data in the context is changed the useContext hook will re-run
    const {employees} = useContext(EmployeeContext);
    const {getIncrement} = useContext(EmployeeContext);
    const {getSums} = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(10);

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000)
    };

    const handleIncrement = () => {
        getIncrement();
    }

    const handleSums = () => {
        getSums();
    }

    //Runs once at the start
    useEffect(() =>{
        handleClose();

        return () => {
            handleShowAlert();
        }
    }, [employees]); //employees here is a condition so that this useEffect hook will only run each time a change is made to employees

    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(employees.length / employeesPerPage);

    return(
        <> {/*this can also be written as <React.Fragment>*/}
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <Button onClick={handleShow} className="btn btn-info m-2" data-toggle="modal">
                            <span>Create New Employee</span>
                        </Button>
                        <Button onClick={handleIncrement} className="btn btn-info m-2">
                            <span>Increment Employee Values</span>
                        </Button>
                        <Button onClick={handleSums} className="btn btn-info m-2">
                            <span>Get List of Sums</span>
                        </Button>
                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success">
                Employee list updated!
                </Alert>

            <table className="table table-striped table-hover mt-2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // employees.map(employee => (
                        currentEmployees.map(employee => (
                            <tr key={employee.name}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} totalEmployees={employees.length} currentEmployees={currentEmployees.length}/>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Button</Button>
                </Modal.Footer>
            </Modal>
        </> /*this can also be written as </React.Fragment>*/
    )
}

export default EmployeeList;