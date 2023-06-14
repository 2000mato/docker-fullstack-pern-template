import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header'
import Content from '../src/components/Content'
import Footer from '../src/components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <Content /> 
      <Footer />
    </>
  )
}

export default App
