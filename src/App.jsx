import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/componentes/Header/header'
import Div from './assets/componentes/Div/Div'
import Form from './assets/componentes/Form/form'
import Divpost from './assets/componentes/Divpost/Divpost'
import Divcategory from './assets/componentes/Divcategory/Divcategory'
import DivArchive from './assets/componentes/DivArchive/DivArchive'
import Divcards from './assets/componentes/Divcards/Divcards'
import Ul from './assets/componentes/Ul/Ul'
import DivPopular from './assets/componentes/DivPopular/DivPopular'
import DivFooter from './assets/componentes/DivFooter/DivFooter'
import Footer from './assets/componentes/Footer/Footer'
import AFooter from './assets/componentes/AFooter/AFooter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Div/>
    <Form/>
    <Divpost/>
    <Divcategory/>
    <DivArchive/>
    <DivPopular/>
    <Divcards/>
    <Ul/>
    <DivFooter/>
    <Footer/>
    <AFooter/>
    </>
      )
}

export default App
