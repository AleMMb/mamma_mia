
import { BrowserRouter, Routes, Route } from 'react-router-dom'
/*import { useEffect , useState} from 'react'*/
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Details from './views/Details'
import NotFoundPage from './views/NotFoundPage'


function App() {

  /*const [pizzas, setPizzas] = useState([])

  const getPizzas = async () => {
    const res = await fetch("/pizzas.json")
    const pizzas = await res.json()
    setPizzas(pizzas)
    console.log(pizzas)
  }
  
    useEffect(() => {
        getPizzas()
      }, [])*/
    
  return (
      <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<Details />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
  )
}export default App
