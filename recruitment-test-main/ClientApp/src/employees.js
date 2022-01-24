import React, { useEffect, useState } from 'react';

export default function Read(){

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        //Get request goes here.
        getData();
    }, []);

    const getData = () => {
        //Get request.
        fetch("http://localhost:41478/List/GetEmployeeList")
        .then(response => response.json())
        .then(
            (result) => {
            setEmployees(result); // ---------------- For some reason doesn't get list of employees
            },
            (error) => {
            console.log("error:::" + error.message);
            console.log("error at getData");
        });
    }

    const setData = (data) => {
        console.log(data);
        let {name,value} = data;
        localStorage.setItem('name', name);
        localStorage.setItem('value', value);
        localStorage.setItem('create', false);
    }

    const onDelete = (name) => {
        //Delete request goes here.
        fetch("http://localhost:41478/List/DeleteEmployee/" + name, { method: 'DELETE' })
        .then(() => window.alert("Delete Successful"));
    }

    return(
        <div className="container">
        <h2>Employees</h2>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {//Map function will iterate over the array and display the data in the output.
                employees.map(data => {
                    return(
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.value}</td>
                            <td><button className="btn btn-info" onClick={() => setData({'name':data.name, 'value':data.value})}>Update</button></td>
                            <td><button className="btn btn-danger" onClick={() => onDelete(data.name)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}