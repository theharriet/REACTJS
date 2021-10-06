//4.2 Styling the Movies
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//javascript class 안에 있으면 component class에 의해 혼란스러워져
//Invalid DOM property `class`. Did you mean `className`? 이런에러뜸
//div등의 className쓸때 class만 쓰지말기.
//label 태그에는 for가 있는데 javascript에서의 for는 loop 그래서 <label htmlFor="">이렇게씀

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] 
  };

  getMovies = async() => {
    const {data: {data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false});
  
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
     return (
      <section className="container">
        { isLoading ? (
          <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie 
                    key={movie.id} 
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                />
              ))}
            </div>
            ) }
      </section>
     );
  }
}

export default App;

