import React,{useState} from 'react';

const App=(props)=> {
  const initialStates ={
    name:'',
    price:1000
  }
const [name,setName]=useState(initialStates.name)
const [price,setPrice]=useState(initialStates.price)
const reset=()=>{
  setPrice(props.price)
  setName(props.name)
}
  return (
    <div>
     <p>現在の{name}は{price}です。</p>
     <button onClick={()=>{setPrice(price+100)}}>+100</button>
     <button onClick={()=>{setPrice(price-100)}}>-100</button>
     <button onClick={reset}>reset</button>
     <input value={name} onChange={e =>setName(e.target.value)} />
    </div>
  );
}
App.defaultProps={
  name:'',
  price:1000
}

export default App;
