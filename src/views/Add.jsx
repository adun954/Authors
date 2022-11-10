import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthorForm from '../components/AuthorForm';


// Add props to render the variables, using arrow function
const AddAuthor = (props) => {
    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to={'/authors'}>
                Home
            </Link>
            <p>Add a New Author:</p>
            <AuthorForm/>
        </div>
    ) 
}

export default AddAuthor;