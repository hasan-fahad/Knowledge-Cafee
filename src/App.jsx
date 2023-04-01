import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Reading from './components/Reading/Reading'
import Bookmarked from './components/Bookmarked/Bookmarked'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './components/Question/Question'

function App() {
  // const [count, setCount] = useState(0)
  // Deaclare Reading Time function
  const [reading, setReading] = useState(0)
  const handleReadTime = (time) =>{
    setReading(reading + time)
  }

  const [bookmarked, setBookmarked] = useState([])
  const handleBookmarked = (blogs) =>{
    const blogItem =  [...bookmarked, blogs]
    setBookmarked(blogItem)
    }

  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div className='main row'>
        <div className='home col-md-7'>
          <Home handleBookmarked ={handleBookmarked} handleReadTime={handleReadTime}></Home>
        </div>
        <div className='blog col-md-5'>
          <Reading reading ={reading}></Reading>
          <Bookmarked bookmarked={bookmarked}></Bookmarked>
        </div>
      </div>
      <Question></Question>
    </div>
  )
}

export default App
