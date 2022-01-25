import React, {useContext, useState} from 'react';
import { Form,Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext"


const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext);

    const [newEmployee, setNewEmployee] = useState({name:"",value:0});

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
    }

    const {name, value} = newEmployee;

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, value);
    }
    
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="m-2">
                <Form.Control
                    type="text" 
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Control
                    type="number" 
                    placeholder="Value *"
                    name="value"
                    value={value}
                    onChange={(e) => onInputChange(e)}
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" className="m-2" block>Add New Employee</Button>
        </Form>
    )
}

export default AddForm;