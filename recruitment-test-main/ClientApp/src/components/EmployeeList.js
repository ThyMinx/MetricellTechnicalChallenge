import React, {useContext} from 'react';
import {EmployeeContext} from '../contexts/EmployeeContext'; //EmployeeContext is in {} because it isn't export default
import Employee from './Employee';

const EmployeeList = () => {

    //When the data in the context is changed the useContext hook will re-run
    const {employees} = useContext(EmployeeContext);

    return(
        <> {/*this can also be written as <React.Fragment>*/}
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Manage <b>Employees</b></h2>
                    </div>
                    <div className="col-sm-6">
                        <a href="#addEmployeeModal" className="btn btn-info m-2" data-toggle="modal">
                            <span>Create New Employee</span>
                        </a>
                    </div>
                </div>
            </div>
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
                        employees.map(employee => (
                            <tr key={employee.name}>
                                <Employee employee={employee} />
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </> /*this can also be written as </React.Fragment>*/
    )
}

export default EmployeeList;