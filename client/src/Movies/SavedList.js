import React, { useState } from 'react';
import { Link } from 'react-router-dom'


/* [ ] You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button. You will need to uncomment lines 24-27 in `Movie.js` to complete this.

#### Turn your Saved Movie list into `Link`s

* [ ] Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.*/


export default function SavedList(props) {

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}<Link exact to='/'> 
        <div className="home-button">Home</div>
      </Link>
      
    </div>
  );
}
