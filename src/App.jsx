import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/componentes/Header/header'
import Div from './assets/componentes/Div/Div'
import Form from './assets/componentes/Form/form'
import Divcategory from './assets/componentes/Divcategory/Divcategory'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header/>
    <Div/>
    <Form/>
    <Divcategory/>
    </>
      )
}

export default App
