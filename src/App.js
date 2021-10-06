//All you need to know about State
import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count -1 }));
  }

  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("good bye");
  }
  render(){
    console.log("I'm redering");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;

//react class component는 render만 있는게 아님
// life cycle method도 있음. 기본적으로 react가 component를 생성하고 없애는 방법

//mounting : component가 생성되어 DOM에 insert될 때 호출되는 메서드
// -constructor():(reder전에)component가 mount될때, component가 screen에 표시될때, component가 너의 website에 갈때 호출
// -componentDidMount : render()다음에 호출
//updating : props or state가 바뀔때 호출, setState할때마다 (re-rendered 될 때)
// -componentDidUpdate : setState를 호출 -> component 호출 -> render 호출 -> 업데이트완료 -> componentDidUpdate 실행
//unmounting : component가 제거 될때, 페이지를 바꿀때, state를 사용해서 component가 교체될때 호출
// -  componentWillUnmount()



// add = () => {
//   this.setState(current => ({ count: current.count + 1 }));
// }; 클래스라 this.setState해줘야함