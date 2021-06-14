import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { Route, Link, Switch } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
  
      
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data)
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
  }, []);
    
  const addToSavedList = id => {
    if(!saved.find(id)){
      setSaved (saved.push( id ));
    }else{
      console.log('Movie is already saved. :-)')
    }
 
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={saved} />


      <Route exact path='/' render={props => {
        return <MovieList {...props} movies={movieList} />
      }} />
      <Route path="/movies/:movieID" render={props => {
        return <Movie id={props.id}
          movies={props.movies} />
      }} />



    </div>
  );
}
