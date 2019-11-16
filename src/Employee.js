import React from 'react'



const Employee=(props)=>
{
    
    return(

        <div key={props._id} style= {{border:"2px solid black"}}>
       
            <h4>Id: {props._id}</h4>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Company: {props.company}</p>
            <p>Email: {props.email}</p>
            <p>IsActive: {props.isActive.toString()}</p>
        </div>
        )
    
}

export default Employee