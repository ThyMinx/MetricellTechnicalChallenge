//Contexts are like global properties that can be accessed from any component rather than passing properties from parent to child.
import React, {createContext, useState, useEffect} from 'react'

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {

    //setEmployees is a function that allows us to update the state.
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    },[])

    const getEmployees = () =>{
        fetch("/List/GetEmployeeList")
        .then(response => response.json())
        .then(
            (result) => {
            setEmployees(result);
            console.log(result);
            },
            (error) => {
            console.log("error:::" + error.message);
            console.log("error at getData");
        });
    }

    const getSums = () =>{
        fetch("/List/SumList")
        .then(response => response.json())
        .then(
            (result) => {
                console.log(result);
                let msg = "";
                for(let i = 0; i < result.length; i++) {
                    console.log(result[i]);
                    console.log(result[i].y + " " + result[i].x);
                    msg += result[i].y + " is the total value for " + result[i].x + ".\n";
                }
                console.log(msg);
                window.alert(msg);
            },
            (error) => {
            console.log("error:::" + error.message);
            console.log("error at getData");
        });
    }
    
    const getIncrement = () =>{
        fetch("/List/Increment")
        .then(response => response.json())
        .then(
            () => {
            getEmployees();
            },
            (error) => {
            console.log("error:::" + error.message);
            console.log("error at getData");
        });
    }

    //Create
    const addEmployee = (name, value) => {
        //Post request goes here and if successful then setEmployees should be called.
        const emp = {"name": name, "value": parseInt(value)};
        fetch("/List/PostEmployee",{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(emp)
        })
        .then(response => response.json())
        .then(
            (result) => {
            console.log(result);
            getEmployees();
            },
            (error) => {
            console.log("error:::" + error.message);
            console.log("error at postData");
        });
        // setEmployees([...employees, {name, value}]);
    }

    //Delete
    const deleteEmployee = (name) => {
        //Delete request goes here and if successful then setEmployees should be called.
        fetch("/List/DeleteEmployee/" + name, { method: 'DELETE' })
        .then(() => {
            getEmployees();
        });
        // setEmployees(employees.filter(employee => employee.name !== name));
    }

    //Update
    const updateEmployee = (name, updatedEmployee) => {
        //Put request goes here and if successful then setEmployees should be called.
        //Essentially looping through all the employees and if the name matches the passed in one then it's changed to the new employee.
        const emp = {"name": name, "value": parseInt(updatedEmployee.value)};
        fetch("/List/PutEmployee",{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(emp)
        })
        .then(response => response.json())
        .then(
            (result) => {
            console.log(result);
            getEmployees();
            },
            (error) => {
            console.log("error:::" + error.message);
            console.log("error at postData");
        });
        // setEmployees(employees.map((employee) => employee.name === name ? updatedEmployee : employee));
    }

    return(
        <EmployeeContext.Provider value={{employees, addEmployee, deleteEmployee, updateEmployee, getEmployees, getIncrement, getSums}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;