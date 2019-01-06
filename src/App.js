import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';

class App extends Component {
  constructor(props){
    super(props)
    console.log("This is my initializer")

  const movies = [
    {id:0, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title:"Avengers:Infinity War", overview:"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle"},
    {id:1, title:"The Avengers", overview:"This is my second overview"},
  ]

 

  var movieRows = []
  movies.forEach((movie) => {
    console.log(movie.title)
    const movieRow = <MovieRow/>
    /*const movieRow = 
    <table key={movie.id}>
      <tbody>
        <tr>
          <td>
          <img alt="poster" width="120" src={movie.poster_src}/>
          </td>
          <td>
            {movie.title}
            <p>{movie.overview}</p>
          </td>
        </tr>

      </tbody>
    </table>*/
  movieRows.push(movieRow)
  })



  this.state = {rows: movieRows}
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
