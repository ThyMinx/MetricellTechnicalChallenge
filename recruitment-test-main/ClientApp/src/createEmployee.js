import React, { useState } from 'react';
// import { createEmployee } from './employeeService';

export default function Create() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const postData = () => {
        //Post request goes here.
        console.log(name);
        console.log(value);
        console.log({"name":name, "value":value});
        // createEmployee({"name":name, "value":value});
        fetch("http://localhost:41478/List/GetEmployeeList",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"employee":{"name":name, "value":value}})
        })
        .then(response => response.json())
        .then(
            (result) => {
            console.log(result);
            },
            (error) => {
            console.log("error:::" + error.message);
            console.log("error at postData");
        });
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Create Employee</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" name="name" id="name" placeholder="Name"/>
                            </div>    
                            <div className="form-group col-md-6">
                                <label htmlFor="inputValue">Value</label>
                                <input type="text" onChange={(e) => setValue(e.target.value)} className="form-control" name="value" id="value" placeholder="Value"/>
                            </div>    
                        </div>  
                        <button type="button" onClick={postData} className="btn btn-information">Create</button>  
                    </form>    
                </div>    
            </div>
        </div>
    )
}