import React,{useState,useEffect} from 'react';

const App=(props)=> {
const [state,setState]=useState(props)
const {name,price}=state
useEffect(()=>{
  console.log('useEffect');
})
useEffect(()=>{
  console.log('useEffect2');
},[])
useEffect(()=>{
  console.log('useEffectfor name');
},[name])

  return (
    <div>
     <p>現在の{state.name}は{state.price}です.</p>
     <button onClick={()=>{setState({...state,price:state.price+100})}}>+100</button>
     <button onClick={()=>{setState({...state,price:state.price-100})}}>-100</button>
     <button onClick={()=>{setState(props)}}>reset</button>
     <input value={state.name} onChange={e =>setState({...state,name:e.target.value})} />
    </div>
  );
}
App.defaultProps={
  name:'',
  price:1000
}

export default App;
