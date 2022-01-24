import React, { useState } from 'react';
// import { createEmployee } from './employeeService';

export default function Create() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const postData = () => {
        //Post request goes here.
        console.log(name);
        console.log(value);
        const employee = {"name": name, "value": parseInt(value)};
        console.log(employee);
        // createEmployee({"name":name, "value":value});
        fetch("/List/PostEmployee",{
            method: 'POST',
             mode: 'cors',
             cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
             credentials: 'same-origin', // include, *same-origin, omit
            headers: {'Content-Type': 'application/json'},
             redirect: 'follow', // manual, *follow, error
             referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(employee)
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