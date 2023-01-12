
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './views/Home'
import Details from './views/Details'
import NotFoundPage from './views/NotFoundPage'
import { PizzasProvider } from './context/PizzasContext'


function App() {

  return (
      <BrowserRouter>
       <PizzasProvider>
          <Navbar />

          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/pizza/:id' element={<Details />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>

          <Footer />
          </PizzasProvider>
      </BrowserRouter>
  )
}export default App
