import React from 'react'
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const AuthorList = (props) => {
    const { authors, removeFromDom } = props;

    const deleteAuthor = (e, id) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + id)
            .then(res =>{
                removeFromDom(id)
            })
            .catch(err => console.error(err));
    }
    
    const navigate = useNavigate
    // pass in id into an arguement so the id of one author can be called
    const handleEditButton = (e, id) => {
        // navigate to new path
        // Need the pass the id for the authors route
        navigate("/authors/" + id + "/edit")



    }

    return (
        <div>
            
            <table>
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Action avalible</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, idx) => {
                            return (
                                <tr key={ idx }>
                                    <td>{ author.name }</td>
                                    <td>
                                        <Link to={'/authors/' + author._id + '/edit'} >Edit</Link>
                                        <button onClick={(e) => deleteAuthor(e, author._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default AuthorList;

