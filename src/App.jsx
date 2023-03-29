import { useState } from 'react'
import Header from './assets/blog/Header/Header'
import Div from './assets/blog/Div/Div'
import Form from './assets/blog/Form/form'
import Divpost from './assets/blog/Divpost/Divpost'
import Divcategory from './assets/blog/Divcategory/Divcategory'
// import DivArchive from './assets/componentes/DivArchive/DivArchive'
import Divcards from './assets/blog/Divcards/Divcards'
import Ul from './assets/blog/Ul/Ul'
import DivPopular from './assets/blog/DivPopular/DivPopular'
import DivFooter from './assets/blog/DivFooter/DivFooter'
import Footer from './assets/blog/Footer/Footer'
import AFooter from './assets/blog/AFooter/AFooter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Div/>
    <Form/>
    <Divpost/>
    <Divcategory/>
    {/* <DivArchive/> */}
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
