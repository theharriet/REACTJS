//component에서 정보보내기
// function Food({fav}){
//    return <h1>I like {fav}</h1>
// }
function Food({name, picture}){
  return <div>
  <h2>I like {name}</h2>
  <img src={picture} alt={name} />
  </div>
}
//alt는 시각장애인을 위한기능. 없으면 console에 알람뜸

//object의 list를 가져오는 법
const foodILike = [
  {
    id:1,
   name:"yookpo",
   image:"data:image/jpeg;base64,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" 
  },
  {
    id:2,
    name:"pasta",
    image:"https://hips.hearstapps.com/delish/assets/17/36/1504715566-delish-fettuccine-alfredo.jpg"
  },
  {
    id:3,
    name:"bakssuk",
    image:"https://contents.lotteon.com/itemimage/_v140056/LF/13/74/63/1_/0/LF1374631_0_1.jpg/dims/resizemc/400x400"
  },
  {
    id:4,
    name:"kim",
    image:"https://ww.namu.la/s/0a8f420a2ecc140c59ba517e61ab990cfbff0f557e20417ff04fad739de32bf9a0163aa01b31131800acdd96ae8a4c31a41b07eb566303145179757428cc850b040580cae75af5bb1da57650b68c9515"
  }
]
// id없을때는 아래 에러뜸
//index.js:1 Warning: Each child in a list should have a unique "key" prop.
//react에서는 모든 element들은 다르게 보여야함 유일성
//그리고food component에 prop을 부여 <Food key={dish.id />} 아래처럼.

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;

//React가 빠른 이유
//react는 소스코드에 처음부터 HTML을 넣지 않고, HTMl에서 HTML을 추가하거나 제거한다
// 빈 html을 불러왔다가 react가 html을 밀어넣음
// react는 virtual임

//component : HTML을 반환하는 함수, 재사용 가능성 뛰어남
// function App을 가지고 html을 반환할거야 여기서.

//about jsx
//1. 한개의 component만 쓸수있고 더 필요하다면 첫번째 컴포넌트 안에 넣어야함
//2. component에서 정보를 보낼수 있음

//2~
//apllication에서 food component로 정보를 보낸 다음 food component에서 그 정보를 어떻게 
//사용하는지.
//<Food name="kimchi" /> food component에 kimchi라는 value로 prop name을 줌
//something={true} papapa={["hello",1,2,3,4]} 이런것도 ㄱㄴ
// 그리고 food function component의 argument로 넣을겨
// props object 내부에는 fav가 있음
//function Food(props){ console.log(props.fav); 이거랑 function Food({fav}})랑 똑같
  // console.log(props);
  //return <h1>I like Potato</h1>}

//<div className="App">
  //   { <Food fav="kimchi" />
  //   <Food fav="pasta" />
  //   <Food fav="salad" />
  //   <Food fav="ramen" /> }
//</div>
  ////object의 list를 가져오는 법

  // //map의 첫번째 argument는 array의 각 item에 대해 실행되는 함수 -> 적용한 array 반환
  //friends.map(current => console.log(current); return 0)
  //friends.map(function(friend){return friend + " ❤";})




  //6666666666666666666666666666666666666666

  // function App() {
  //   return (
  //     <div className="App">
  //       {foodILike.map(dish => (
  //         <Food name={dish.name} picture={dish.image}/>
  //       ))}
  //     </div>
  //   );
  // }

  //이것만 해도되고 아래 두개해도되고.

  // function renderFood(dish){
  //   //console.log(dish)
  //   return <Food name={dish.name} picture={dish.image} />
  // }
  
  // function App() {
  //   return (
  //     <div className="App">
  //       {/* [<Food name={} /> <Food nam={} />]랑  {foodILike.map(renderFood)} 같음 */}
  //       {console.log(foodILike.map(renderFood))}
  //       {foodILike.map(renderFood)}
  //     </div>
  //   );
  // }

  //99999999999999999999999999999999999999999999