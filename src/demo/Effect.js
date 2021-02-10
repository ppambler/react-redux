import React,{useState,useEffect} from "react"

function Effect() {
  const [count,setCount] = useState(0)

  useEffect(()=>{
    document.querySelector('#output').innerHTML = count
  })

  const add = (n) => {
    setCount(count + n);
  };
  const minus = (n) => {
    setCount(count - n);
  };

  return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={()=>{add(1)}}>+1</button>
      <button onClick={()=>{minus(1)}}>-1</button>
    </div>
  )
}

export default Effect