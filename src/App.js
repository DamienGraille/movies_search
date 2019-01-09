import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
   /* console.log("This is my initializer")

  const movies = [
    {id:0, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title:"Avengers:Infinity War", overview:"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle"},
    {id:1,poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",title:"The Avengers", overview:"This is my second overview"},
  ]

 

  var movieRows = []
  movies.forEach((movie) => {
    console.log(movie.title)
    const movieRow = <MovieRow movie={movie}/>
  movieRows.push(movieRow)
  })



  this.state = {rows: movieRows}*/
  this.performSearch()
  }

  performSearch(){
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/keyword?api_key=930694ba1ece0a22257165acb5d7eb1b&query=Venom&page=1"
  $.ajax({
    url: urlString,
    success: (searchResults) => {
      console.log("Fetched data successfully")
      console.log(searchResults)
    },
    error: (xhr, status, err) => {
      console.log("Failed to fetch data")
    }
  })
  }


  render() {
    return (
      <div>
         <table className= "titleBar">
           <tbody>
             <tr>
               <td>
                 <img alt="app icon" width="50" src="icon.png"/>
               </td>
               <td width="8">
               </td>
               <td>
                 <h1>MoviesDB Search</h1>
               </td>
             </tr>
           </tbody>
         </table>
         <input className="inputBar"
         placeholder="Enter search term"/>
      
      {this.state.rows}
      </div>
    );
  }
}

export default App;
