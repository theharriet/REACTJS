import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// react는 component를 사용해서 html처럼 작성하려는 경우에 필요
//component : HTML을 반환하는 함수

//javascript와 html 사이의 이러한 조합을 -> jsx

//****
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Potato from './Potato';

// ReactDOM.render(
//   <React.StrictMode>
//     <App /><Potato />
//   </React.StrictMode>,
//   document.getElementById('potato')
// );

// //이렇게 하면 안돼 
// //react application이 하나의 component만을 rendering해야하기 때문이야 
// // 지금 그 컴포넌ㅌ트가 App. 그 안에 다른 컴포넌트를 넣어줘야 쓸수있음

//App.js안에 <Potato />를 추가
//import Potato from "./Potato";
// function App() {
//   return (
//     <div className="App">
//      hi
//      <Potato />
//     </div>
//   );
// }