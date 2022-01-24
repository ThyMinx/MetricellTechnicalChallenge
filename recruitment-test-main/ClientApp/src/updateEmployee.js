import React, { useEffect, useState } from 'react';

export default function Update() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const updateData = () => {
        //Put request goes here. http://localhost:41478/UpdateEmployee/${name}
        console.log(name);
        console.log(value);
        const employee = {"name": name, "value": parseInt(value)};
        console.log(employee);
        fetch("/List/PutEmployee",{
            method: 'PUT',
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

    useEffect(() => {
        setName(localStorage.getItem('name'));
        setValue(localStorage.getItem('value'));
    }, []);

    return(
        <div className="container">           
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Update Employee</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control disabled" name="name" id="name" placeholder="Name" value={name}/>
                            </div>    
                            <div className="form-group col-md-6">
                                <label htmlFor="inputValue">Value</label>
                                <input type="text" onChange={(e) => setValue(e.target.value)} className="form-control" name="value" id="value" placeholder="Value" value={value}/>
                            </div>    
                        </div>  
                        <button type="button" onClick={updateData} className="btn btn-information">Update</button>  
                        {/* <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button> */}
                    </form>    
                </div>    
            </div> 
        </div>
    )
}