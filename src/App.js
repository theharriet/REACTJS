//5.0 depolying to the git hub pages
//1. install gh-pages : npm i gh-pages
//2. package.json에 "homepage": "https://theharriet.github.io/movie_app/" 추가
//3. package.json script에 "deploy": "gh-pages -d build", "predeploy": "npm run build" 추가
//    deploy : npm run deploy -> build folder에 업로드 (deploy 하면 predeploy 자동 실행)(update)
//    predeploy : npm run build -> build folder 생성

// ctrl + c ==> 서버 내리기

// 사실 더이상 state를 갖기 위해 class component를 가질 필요가 없어 because of React Hook
// 궁금하면 찾아봐

import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";



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

