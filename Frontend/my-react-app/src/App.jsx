import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './components/Appbar'
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./components/Home";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <ResponsiveAppBar/>
      <Home/>

      </div>
    </>
  )
}

export default App
