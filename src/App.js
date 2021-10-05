//import React from "react"; //니코한텐 있던데 여긴 없어도 되는건가
import Potato from "./Potato"; //이건있어야하네

function App() {
  return (
    <div className="App">
     hi
     <Potato />
    </div>
  );
}

export default App;

//React가 빠른 이유
//react는 소스코드에 처음부터 HTML을 넣지 않고, HTMl에서 HTML을 추가하거나 제거한다
// 빈 html을 불러왔다가 react가 html을 밀어넣음
// react는 virtual임

//component : HTML을 반환하는 함수
// function App을 가지고 html을 반환할거야 여기서.
