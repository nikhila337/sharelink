import Sharelink from './component/sharelink'
import './App.css';


import { useState } from 'react';


function App() {

  const [input ,setInput] = useState(undefined)
  const [text ,setText] = useState(undefined)
  const [test ,settest] = useState(false)

    function  get_input(e){
      // console.log(e,"dssssssss")
        setInput(e.target.value)
    }
    function  get_input2(e){
      // console.log(e,"dssssssss")
        setText(e.target.value)
    }
    console.log(input,'dssssss')

  function onSubmit(){
    input && settest(true)
  }

  return (
    <>
    <h1>Sharelink</h1>
    <p>Link</p>
    <input type='text' onChange={get_input} className='input'/>
    <br/>     
    <p>Text</p>
    <input type='text' onChange={get_input2} className='input'/>
    <br/>     
    <input type='submit' onClick={onSubmit}  className='button'/>
    {test &&<Sharelink  value={input} text={text}/>}
    </>
  );
}

export default App;
