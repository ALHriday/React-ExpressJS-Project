import {Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className='flex flex-col'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
