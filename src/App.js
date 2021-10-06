//All you need to know about State
//state ,instead of prop
// 동적데이터를 쓸 때 사용, 생겨나고 사라지고 또는 변경된 데이터, 
// 하나인 데이터-> 두개가 되고 또는 0이 되는 그런 종류, dynamic data. 
import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    //console.log("add");
    //this.setState({ count: 1 });
    //this.setState({ count: this.state.count + 1 });
    //this.state.count + 1 이렇게 쓰는건 추천하지 않아 not cool (외부의 state를 의존하는것)
    // 여러가지 performance 문제도 있음
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    //console.log("minus");
    //this.setState({ count: -1 });
    //this.setState({ count: this.state.count - 1 });
    this.setState(current => ({ count: current.count -1 }));
  }
  render(){
    //return <h1>I am a Class Component</h1>
    //return <h1>The number is : {this.state.count}</h1>; 

    //????
    //jsx가 변경되지않았고 html도 정상이고
    //state가 class component에 있어서 this.state를 할 필요가 있다 그냥 count가 아닌
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
// JavaScript에서는 다른 onClick나 eventListener를 등록해야하는데 
// react에서는 자동으로 주어진 onClick이 있음
export default App;

//function component -> class component로 바꿔줌
//App은 이제 react component임
// class react는 return 없음 (function 아니라서.) 대신 render method를 가짐
// react component를 확장했기 때문에 App component 안에 있음..?

// function component VS class component 차이점
//function component는 function이고 뭔가를 return 하고 screen에 표시
//class component는  class고 react component로 부터 확장되고 screen에 표시됨
// react는 자동으로 class component의 render method를 실행

//state는 Object이고 component의 data를 넣을 공간이 있고 이 데이터는 변한다

//이러면 state를 변경하고 있지만, state는 동작하지 않아
// add = () => {
//     this.state.count = -1;
//   };
//   minus = () => {
//     this.state.count = -1;
//   }
// Why? react는 render function을 refresh하지 않기 때문
// 매번 state의 상태를 변경할 때 react가 render function을 호출해서 바꿔주길 원한다는 말/
// react는 자동으로 지가 하길 원하는데 내가 state를 변경하니까 하지말라고 메세지 줌
//======>
//setState는 새로운 state를 취해야함. 
//setState를 호출하면 react는 state를 refresh하고 또한 render function을 호출
// ******************** 데이터가 변경된 부분만 refresh. (0,-1,1) -> because of virtual DOM
