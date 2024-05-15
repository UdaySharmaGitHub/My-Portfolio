import {Outlet} from 'react-router-dom'
import './App.css'
import Asides from './components/Asides'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Asides/>
    <div className='main-content'>
      <Navbar/>
      <section style={{scrollBehavior:'smooth'}}>
        <Outlet/>
      </section>
    </div>
    </>
  )
}

export default App
