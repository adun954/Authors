import React, { useEffect, useState } from 'react';
import AuthorList from '../components/AuthorList';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Main = (props) => {
  const [authors, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(()=>{
      axios.get('http://localhost:8000/api/authors')
          .then(res=>{
            // must pass into the controller in the server file of what you are passing
              setAuthor(res.data.Author);
              setLoaded(true);
          })
          .catch(err => console.error(err));
  },[]);

  const removeFromDom = authorId => {
    setAuthor(authors.filter(author => author._id != authorId));

}


    return (
        <div>
        <h1>Favorite Authors</h1>
        <Link to ={"/authors/new"}>Add an author</Link>
        <hr/>
          {/* sends the list of authors to show on the jsx */}
        {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;