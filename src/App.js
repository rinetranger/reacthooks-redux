import React,{useState} from 'react';

const App=()=> {
  const [count,setCount] = useState(0)
  const increment =()=>setCount(count+1)
  const decrement =()=>setCount(count-1)
  const increment2 =()=>setCount(previousCount=>previousCount+1)
  const decrement2 =()=>setCount(previousCount=>previousCount-1)
  const reset = ()=>setCount(0)
  const double =()=>setCount(count*2)
  const dividezero =()=>{
    if(count%3==0){
      setCount(count/3)
    }else{
      setCount(count)
    }
  }
  return (
    <div>
      <div>
        count:{count}
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <button onClick={double}>X2</button>
      <button onClick={reset}>reset</button>
      <button onClick={dividezero}>3の倍数で割り切れる場合の商</button>
    </div>
  );
}

export default App;
