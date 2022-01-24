import React, { useEffect, useState } from 'react';
import './Bootstrap/css/bootstrap.min.css';
import './style.css';
import { Header } from './header';
import Create from './createEmployee';
import Read from './employees';
import Update from './updateEmployee';

export default function App(){
    
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
            <div className="row m-5">
                <Read />
            </div>
        </div>
    );
}
