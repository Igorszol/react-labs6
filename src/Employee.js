import React from 'react'



class Employee extends React.Component
{
    constructor(props) {
        super(props);
    }
    render()
    {

        return(
            
            <div style= {{border:"2px solid black"}}>
       
             <h4>Id: {props.id}</h4>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Company: {props.company}</p>
            <p>Email: {props.email}</p>
            <p>IsActive: {props.isActive.toString()}</p>
           
            
           
        </div>
        )
    }
    
}

export default Employee