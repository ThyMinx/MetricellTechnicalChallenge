import {Modal,Button} from 'react-bootstrap';
import React, {useContext, useState, useEffect} from 'react';
import {EmployeeContext} from '../contexts/EmployeeContext';
import UpdateForm from './UpdateForm';

const Employee = ({employee}) => {
    const {deleteEmployee} = useContext(EmployeeContext);
    
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //Runs once at the start
    useEffect(() =>{
        handleClose();
    }, [employee]); //employees here is a condition so that this useEffect hook will only run each time a change is made to employees

    return(
        <>
            <td>{employee.name}</td>
            <td>{employee.value}</td>
            <td>
                <button onClick={handleShow} className="btn btn-primary m-2 mt-0 mb-0">Update</button>
                <button onClick={() => deleteEmployee(employee.name)} className="btn btn-danger m-2 mt-0 mb-0">Delete</button>    
            </td>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateForm theEmployee={employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close Button</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Employee;