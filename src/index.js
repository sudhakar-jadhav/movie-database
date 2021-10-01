import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./searchMovie";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Movie Database</h1>
        <SearchMovies />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));

export default Main;
