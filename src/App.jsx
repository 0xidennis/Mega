import React from 'react'
import Home from './Page/Home'
import ApplicOne from './loanform/ApplicOne'
import ApplicTwo from './loanform/ApplicTwo'
import ApplicThre from './loanform/ApplicThre'
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import LoanService from './Component/LoanService'
import About from './Component/About'
import Header from './Static/Header'
import Footer from './Static/Footer'

const App = () => {
  return (
    <div>
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loans" element={<LoanService/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/get-started' element={<ApplicOne/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      {/* <ApplicTwo/> */}
      {/* <Home/> */}
    </div>
  )
}

export default App
