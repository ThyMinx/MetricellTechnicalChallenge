import React from 'react';

//                    has 2 functions as properties
const CreateEmployee = ({onChangeForm, createEmployee}) => {

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                    <h2>Create Employee</h2>
                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="name" id="name" placeholder="Name"/>
                            </div>    
                            <div className="form-group col-md-6">
                                <label htmlFor="inputValue">Value</label>
                                <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="value" id="value" placeholder="Value"/>
                            </div>    
                        </div>  
                        <button type="button" onClick={(e) => createEmployee(e)} className="btn btn-information">Create</button>  
                    </form>    
                </div>    
            </div>
        </div>
    )
}

export default CreateEmployee