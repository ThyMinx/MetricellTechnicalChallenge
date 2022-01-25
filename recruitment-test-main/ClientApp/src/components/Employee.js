import React from 'react';

const Employee = ({employee}) => {
    return(
        <>
            <td>{employee.name}</td>
            <td>{employee.value}</td>
            <td>
                <button className="btn btn-primary mr-2">Update</button>
                <button className="btn btn-danger mr-2">Delete</button>    
            </td>
        </>
    )
}

export default Employee;