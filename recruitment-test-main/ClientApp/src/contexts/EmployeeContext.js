//Contexts are like global properties that can be accessed from any component rather than passing properties from parent to child.
import React, {createContext, useState} from 'react'

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {

    //setEmployees is a function that allows us to update the state.
    const [employees/*, setEmployees*/] = useState([
        {name:'test',value:1234},
        {name:'test1',value:123}
    ]);

    return(
        <EmployeeContext.Provider value={{employees}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;