import React, { Component} from 'react';
import './Bootstrap/css/bootstrap.min.css';
import './style.css';
import { Header } from './header';
import { Employees } from './employees';
import CreateEmployee from './createEmployee';
import { EmployeeCounter } from './employeeCounter';
import { getAllEmployees, createEmployee } from './employeeService'; 

export default class App extends Component {

    state = {
        employee: {},
        employees: [],
        numberOfEmployees: 0
    }

    createEmployee = (e) => {
        createEmployee(this.state.employee).then(response => {
            console.log(response);
            this.setState({numberOfEmployees: this.state.numberOfEmployees + 1})
        });
    }

    getAllEmployees = (e) => {
        getAllEmployees().then(employees => {
            console.log(employees);
            this.setState({employees: employees, numberOfEmployees: employees.length});
        });
    }

    onChangeForm = (e) => {
        let employee = this.state.employee
        if(e.target.name === 'name'){
            employee.Name = e.target.value;
        }
        else if (e.target.name === 'value'){
            employee.Value = e.target.value;
        }
        this.setState({employee});
    }

    render() {
        return (
            // <div>Complete your app here</div>
            <div>
                <Header></Header>
                <div className="container mrgnbtm">
                    <div className="row">
                        <div className="col-md-8">
                            <CreateEmployee onChangeForm={this.onChangeForm} createEmployee={this.createEmployee}></CreateEmployee>
                        </div>
                        <div className="col-md-4">
                            <EmployeeCounter numberOfEmployees={this.state.numberOfEmployees} getAllEmployees={this.getAllEmployees}></EmployeeCounter>
                        </div>
                    </div>
                </div>
                <div className="row mrgnbtm">
                    <Employees employees={this.state.employees}></Employees>
                </div>
            </div>
        );
    }
}
