import React, { useEffect, useState } from 'react';

export default function Update() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const updateData = () => {
        //Put request goes here. http://localhost:41478/UpdateEmployee/${name}
        console.log(name);
        console.log(value);
        localStorage.setItem('create',true);
    }

    const cancelUpdate = () => {
        localStorage.setItem('create',true);
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
                                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" name="name" id="name" placeholder="Name" value={name}/>
                            </div>    
                            <div className="form-group col-md-6">
                                <label htmlFor="inputValue">Value</label>
                                <input type="text" onChange={(e) => setValue(e.target.value)} className="form-control" name="value" id="value" placeholder="Value" value={value}/>
                            </div>    
                        </div>  
                        <button type="button" onClick={updateData} className="btn btn-information">Update</button>  
                        <button type="button" onClick={cancelUpdate} className="btn btn-danger">Cancel</button>
                    </form>    
                </div>    
            </div>
        </div>
    )
}