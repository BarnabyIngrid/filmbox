import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {

  //a query string to take the value of our input
  //setQuery to change our state. We pass empty string as initial state 
  const [query, setQuery] = useState("");

  //state to store api result with initial value of empty array
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    //call to the TMPD api
    fetch(
      //passing API key through environment variable file. We pass hard coded value of false to avoid adult contents 
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        //if there are no errors then set the result 
        if (!data.errors) {
          setResults(data.results);
        } else {
          //if there is an error then set result to an empty array 
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              //holds value of our input 
              value={query}
              //tells the component what to do when we change the value.
              //handled by a function call 
              onChange={onChange}
            />
          </div>

          {/* check if there is a result then return the un-ordred list of movie(s) as a result */}
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
