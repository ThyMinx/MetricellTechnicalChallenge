// import React, { Component } from 'react';
import React, { useEffect, useState } from 'react';
import './Bootstrap/css/bootstrap.min.css';
import './style.css';
import { Header } from './header';
import { Employees } from './employees';
import CreateEmployee from './createEmployee';
import { EmployeeCounter } from './employeeCounter';
import { getAllEmployees, createEmployee } from './employeeService'; 

export default function App() {

    const [employees, setEmployees] = useState();
    const [employee, setEmployee] = useState({Name:"",Value:0});

    const create = (e) => {
        console.log("employee:::" + employee);
        createEmployee(employee).then(response => {
            console.log(response);
            // setEmployee();
        });
    }

    const onChangeForm = (e) => {
        console.log("change");
        //let employee = employee;
        if(e.target.name === 'name'){
            employee.Name = e.target.value;
        }
        else if (e.target.name === 'value'){
            employee.Value = e.target.value;
        }
        setEmployee(employee);
        console.log(employee);
    }

    // useEffect(async () => {
    //     // getAllEmployees();        
    //     const result = await getAllEmployees();
    //     setEmployees(result);
    // },[])

    useEffect(() => {
        async function fetchData() {
          setEmployees(await getAllEmployees());
        }
        fetchData();
    },[]);

    return (
        // <div>Complete your app here</div>
        <div>
            <Header></Header>
            <div className="container mrgnbtm">
                <div className="row">
                    <div className="col-md-8">
                        <CreateEmployee onChangeForm={onChangeForm} createEmployee={create}></CreateEmployee>
                    </div>
                    <div className="col-md-4">
                        <EmployeeCounter numberOfEmployees={employees?.length ?? 0} getAllEmployees={getAllEmployees}></EmployeeCounter>
                    </div>
                </div>
            </div>
            <div className="row mrgnbtm">
                {employees ? <Employees employees={employees} getAllEmployees={getAllEmployees}></Employees> : 
                <div className="loading"> <p>Loading employees...</p> </div>}
            </div>
        </div>
    );

}
