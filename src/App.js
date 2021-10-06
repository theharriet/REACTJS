// App.js는 Home을 return 하는 대신에 router를 리턴할거임
// router : very simple react component. 우리가 명령한 url을 확인하고 그 컴포넌트를 불러옴
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
//import {About as Potato} from "./routes/About";

function App(){
     return <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
     </HashRouter>
   }
//첫번째 route에 exact true를 추가해주면 겹침문제 해결
// exact는 이거 아니면 랜더링 안함

export default App;

//해결방법은 위
// function App(){
//   return <HashRouter>
//     <Route path="/home">
//       <h1>Home</h1>
//     </Route>
//     <Route path="/home/introduction">
//       <h1>Introduction</h1>
//     </Route>
//     <Route path="/about">
//       <h1>About</h1>
//     </Route>
//   </HashRouter>
// }
// Route를 따로 여러주고 /home /about하면 겹치지 않고 따로 있음
// but /home/introduction하면 또 겹쳐 그 이유는 이게 라우터가 url을 찾는 방법
// /home을 찾고 /home/introduction을 찾기에 겹침

// //지금은 두개의 component가 동시에 랜더링 되어있어서
// //http://localhost:3000/movie_app/#/about or http://localhost:3000/movie_app/#/ 겹쳐
// function App(){
//   //return <span>something</span>
//   return <HashRouter>
//     <Route path="/" component={Home} />
//     <Route path="/about" component={About} />
//     {/* <Route path="/about" component={Potato} /> */}
//   </HashRouter>
// }
// //<Route /> 안에는 중요한 Props가 들어가 1. rendering 할 스크린, 2. url이 뭘 할지
// //<Route path="/about" component={About} />
// // path about.js로 들어가서 about을 보여줘 /about.js로 들어가면 about을 보여줘
// // path는 내가 원하는 만큼 만들 수 있어