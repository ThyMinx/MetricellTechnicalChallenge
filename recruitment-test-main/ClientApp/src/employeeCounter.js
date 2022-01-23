import React from 'react';

export const EmployeeCounter = ({numberOfEmployees, getAllEmployees}) => {
    return(
        <div style={{backgroundColor: 'white'}} className="display-board">
            <h4 style={{color:'black'}}>Employees Created</h4>
            <div className="number">
                {numberOfEmployees}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllEmployees()} className="btn btn-warning">Get All Employees</button>
            </div>
        </div>
    )
}