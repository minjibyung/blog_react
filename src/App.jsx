import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/componentes/Header/header'
import Div from './assets/componentes/Div/Div'
import Form from './assets/componentes/Form/form'
import Divcategory from './assets/componentes/Divcategory/Divcategory'
import Divcards from './assets/componentes/Divcards/Divcards'
import Ul from './assets/componentes/Ul/Ul'
import Divwpp from './assets/componentes/Divwpp/Divwpp'
import Acita from './assets/componentes/Acita/Acita'
// import Footer from './assets/componentes/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Header/>
    <Div/>
    <Form/>
    <Divcategory/>
    <Divcards/>
    <Ul/>
    <Divwpp/>
    <Acita/>
    {/* <Footer/> */}
    </>
      )
}

export default App
