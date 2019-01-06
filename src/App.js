import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log("This is my initializer")

  const movies = [
    {id:0, title:"Avengers:Infinity War", overview:"As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle"},
    {id:1, title:"The Avengers", overview:"This is my second overview"},
  ]

  this.state={rows:[
  <p key="1"> This is my row0</p>,
  <p key="2"> This is my row1</p>,
  <p key="3"> This is my row2</p>,
  ]}

  var movieRows = []
  movies.forEach((movie) => {
    console.log(movie.title)
    const movieRow = 
    <table key={movie.id}>
      <tbody>
        <tr>
          <td>
            <img src=""/>
          </td>
          <td>
            {movie.title}
          </td>
        </tr>

      </tbody>
    </table>
  movieRows.push(movieRow)
  })



  this.state = {rows: movieRows}
  }


  render() {
    return (
      <div className="App">
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
