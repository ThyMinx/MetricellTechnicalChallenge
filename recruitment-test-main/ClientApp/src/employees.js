import React from 'react';

export const Employees = ({employees}) => {
    console.log('employees length:::', employees.length);
    if(employees.length === 0) return null;

    const EmployeeRow = (employee, index) => {
        return(
            <tr key = {index} className={index%2 === 0 ? 'odd' : 'even'}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.value}</td>
            </tr>
        )
    }

    const employeeTable = employees.map((employee,index) => EmployeeRow(employee,index))

    return(
        <div className="container">
            <h2>Employees</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeTable}
                </tbody>
            </table>
        </div>
    )
}