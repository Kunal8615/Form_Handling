import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  const formHandler =(e)=>{

    e.preventDefault()
    let form = e.target;
    let formdata= new FormData(form);
    let formobj = Object.fromEntries(formdata.entries())
    console.log(formobj);

  }
  return (
    <>
      <h1>For handling</h1>

      <form onSubmit={formHandler}>
        <div>
          <input type='text' placeholder='username' name='username'  ></input>
        </div>

        <div>

        <input type='text' placeholder='password'  name='password'></input>
        </div>

        <button type='submit'> Submit</button>
      </form>
    </>
  )
}

export default App
