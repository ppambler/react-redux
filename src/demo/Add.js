import React, { Component } from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  // count 的初始值为0，setCount 表示更新 count 的函数
  let [user,setUser]= useState({name:'frank',age:18,hobbies:['打lol','敲code','看篮球']})
  const add = (n) => {
    setCount(count + n);
  };
  const minus = (n) => {
    setCount(count - 1);
  };
  const old = (n) => {
    setUser({
      ...user,
      age: user.age +1
    })
  }
  const delHobby = () => {
    // 这种写法很不直观……
    user.hobbies.splice(1,1)
    setUser({
      ...user
    })
  }
  const addHobby = () => {
    // 姿势1
    // user.hobbies.push(Math.random())
    // setUser({
    //   ...user
    // })
    // 姿势2
    let newHobby = Math.random()
    setUser({
      ...user,
      hobbies:[...user.hobbies,newHobby]
    })
  }
  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => { add(1); }} > {" "} +1{" "} </button> 
        <button onClick={() => { minus(1); }} > {" "} -1{" "} </button>
      </div>
      <div>{user.name},{user.age}</div>
      <button onClick={()=>{old(1)}}>age + 1</button>
      <div>{user.hobbies.join(',')}</div>
      <button onClick={()=>{delHobby()}}>删除一个爱好</button>
      <button onClick={()=>{addHobby()}}>添加一个爱好</button>
    </div>
  );
}

// class App1 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   add(n) {
//     this.setState({
//       count: this.state.count + n,
//     });
//   }
//   minus(n) {
//     this.setState({
//       count: this.state.count - n,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <div>{this.state.count}</div>
//         <div>
//           <button onClick={() => { this.add(1); }} > {" "} +1{" "} </button> 
//           <button onClick={() => { this.minus(1); }} > {" "} -1{" "} </button>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
