import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                // adding Author to fully immerse into backend
                setName(res.data.Author.name);
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/update/' + id, {
            name,
        })
            .then(res => {console.log(res)
            navigate('/authors')})
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <input type="submit" />
                
            </form>
        </div>
    )
}
    
export default Update;

