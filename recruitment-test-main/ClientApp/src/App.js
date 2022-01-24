import React, { useEffect, useState } from 'react';
import './Bootstrap/css/bootstrap.min.css';
import './style.css';
import { Header } from './header';
// import CRUDFormContainer from './crudFormContainer';
import Create from './createEmployee';
import Read from './employees';
import Update from './updateEmployee';
import { EmployeeCounter } from './employeeCounter';
import { getAllEmployees, createEmployee } from './employeeService'; 

export default function App(){

    // state = {
    //     employee: {},
    //     employees: [],
    //     numberOfEmployees: 0
    // }

    // createEmployee = (e) => {
    //     createEmployee(this.state.employee).then(response => {
    //         console.log(response);
    //         this.setState({numberOfEmployees: this.state.numberOfEmployees + 1})
    //     });
    // }

    // getAllEmployees = (e) => {
    //     getAllEmployees().then(employees => {
    //         console.log(employees);
    //         this.setState({employees: employees, numberOfEmployees: employees.length});
    //     });
    // }

    // const onChangeForm = (e) => {
    //     let employee = this.state.employee
    //     if(e.target.name === 'name'){
    //         employee.Name = e.target.value;
    //     }
    //     else if (e.target.name === 'value'){
    //         employee.Value = e.target.value;
    //     }
    //     this.setState({employee});
    // }
    
    const [createOrUpdate, setCreateOrUpdate] = useState(true);

    const onChangeButton = () => {
        console.log("onChangeButton:::called");
        setCreateOrUpdate(localStorage.getItem('create') ?? true);
    }

    useEffect(() => {
        setCreateOrUpdate(localStorage.getItem('create') ?? true);
    }, []);

    return (
        // <div>Complete your app here</div>
        <div>
            <Header></Header>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-12">
                        {/* <button className="btn btn-primary mb-5" onClick={(e) => onChangeButton(true)}>Create Employee Menu</button> */}
                        {/* <button className="btn btn-secondary" onClick={(e) => onChangeButton(false)}>Update Menu</button> */}
                        {/* {createOrUpdate ? <Create /> : <Update />} */}
                        <Create />
                    </div>
                </div>
            </div>
            <div className="row mt-5 mrgnbtm">
                <Read />
            </div>
        </div>
    );
}
