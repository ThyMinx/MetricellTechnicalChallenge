import React, {useContext, useState} from 'react';
import { Form,Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext"


const UpdateForm = ({theEmployee}) => {

    const name = theEmployee.name;

    const [value, setValue] = useState(theEmployee.value);

    const {updateEmployee} = useContext(EmployeeContext);

    const updatedEmployee = {name, value};

    const handleSubmit = (e) => {
        e.preventDefault();
        updateEmployee(name, updatedEmployee);
    }
    
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className="m-2">
                <Form.Control
                    type="text" 
                    placeholder="Name *"
                    name="name"
                    value={name}
                    disabled
                />
            </Form.Group>
            <Form.Group className="m-2">
                <Form.Control
                    type="number" 
                    placeholder="Value *"
                    name="value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="success" type="submit" className="m-2" block>Save Employee</Button>
        </Form>
    )
}

export default UpdateForm;