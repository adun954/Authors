import React, { useState } from  'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

    
    
const Author = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");
    
    
    const onSubmitHandler = e => {

        e.preventDefault();
        // make a post request to create a new authors
        axios.post('http://localhost:8000/api/authors/new', {
            name,
    })
        // if successful return the response of the api that is posted
        // to return an obj of codes use curly braces after the arrow function
        // and after what you are navigating
        .then(res=>{
            console.log(res)
            navigate('/authors')
        })
        // (catch) : if it does not succefully return the response of the api, return a error
        // Put a validation after "err" to state the name must be 3 characters or more
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    };
    
    const handleCancel = (e) => {
        navigate('/authors');
    }
    return(
        <form onSubmit={ onSubmitHandler }>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div>
                <label>Name: </label> 
                <input type="text" onChange={ (e) => setName(e.target.value) } /> 
            </div>
            
            <input type="submit" value="Submit" />
            <input type="button" onClick={ handleCancel } value="Cancel"/>
        </form>
    );
};
    
export default Author;