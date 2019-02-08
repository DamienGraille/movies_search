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
  this.performSearch("avengers")
  }

  performSearch(searchTerm){
    console.log("Perform search using moviedb")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=930694ba1ece0a22257165acb5d7eb1b&language=en-US&page=1&include_adult=false&query="+ searchTerm
  $.ajax({
    url: urlString,
    success: (searchResults) => {
      console.log("Fetched data successfully")
      //console.log(searchResults)
      const results = searchResults.results
      //console.log(results[0])

      var movieRows = []

      results.forEach((movie)=>{
        movie.poster_src = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + movie.poster_path
        //console.log(movie.poster_path)
        const movieRow = <MovieRow key={movie.id} movie={movie}/>
        movieRows.push(movieRow)
      })
      this.setState({rows: movieRows})
    },
    error: (xhr, status, err) => {
      console.log("Failed to fetch data")
    }
  })
  }

  searchChangeHandler(event){
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
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
                 <h1>MoviesDB Search More</h1>
               </td>
             </tr>
           </tbody>
         </table>
         <input className="inputBar" 
         onChange={this.searchChangeHandler.bind(this)}
         placeholder="Enter search term"/>
      
      {this.state.rows}
      </div>
    );
  }
}

export default App;
