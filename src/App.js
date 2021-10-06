//4.1 Rendering the Movies
//api로 부터 data가져오기
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] 
  };

  getMovies = async() => {
  //  const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  //   console.log(movies);
  //   console.log(movies.data.data.movies);
    const {data: {data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies);
    //이제 movie들을 state안에 넣을거야 첫번째는 setState의 movies고 다른건 axios에서 온 movies
    //this.setState({movies:movies}) //그치만 그냥 아래처럼도 쓸수있음 JS가 똑똑해서
    //this.setState({movies})
    this.setState({movies, isLoading: false});
    //하나의 setState에서 두개의 상태를 변경했음
  }

  
  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
     return (
      <div>
        { isLoading 
          ? "Loading..." 
          : movies.map(movie => (
         <Movie 
            key={movie.id} 
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            />
          )) }
      </div>
     );
  }
}

// return <div>{ isLoading ? "Loading..." : movies.map(movie => {
//   console.log(movie);
//   return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
// }) }
// </div>;


export default App;



// {isLoading ? "Loaidng..." : "We are ready"} 
//     { isLoading ? "Loading..." : movies.map(movie) }
//      movie rendering하는 첫번째 방법 : 직접 넣어줌 
//                         두번째 방법: 함수 따로 만들어줌

