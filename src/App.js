//3.3 plannig the movie component
//3.4 fetching movies from API / fetch보다 좋은거 Axios(fetch위에 있는 작은 layer)
import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] //이렇게 쓰고 setTimeout에 book: true를 쓰면 에러가 날까? 안남. 미래에 쓰고자 하는 state를 선언하는건 필수가 아님 
  };

  getMovies = async() => {
   const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }

  //처음에 우리가 render를 하면 호출되는 life cycle method
  componentDidMount(){
    // setTimeout(()=> {
    //   this.setState({isLoading: false, book: true });
    // }, 6000);
    // fetch()
   
   // const movies = axios.get("https://yts-proxy.now.sh/list_movies.json");
   //axios가 항상 빠르지는 않아 그래서 javascript에게 componetnDidMount함수가 끝날대 까지 약간 시간이 걸릴수 있다고 말해줘야함
   //그래서 이걸 getMovies라는 함수에 넣어 async와 await도 넣어줌 await까지 기다려줌 그리고 호출
    this.getMovies();
  }
//이제 우리가 할 일 : componentDidMount에서 data를 fetch
//API로부터 data fetching 후에 we are ready 대신 map 만들어서 movie를 render.

  render(){
    const { isLoading } = this.state;
     return (
      <div>
       {isLoading ? "Loaidng..." : "We are ready"}
      </div>
    );
  }
}

export default App;

//life cycle method -> mounting, updating, unmounting