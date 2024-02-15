import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Movie from './components/main/Movie'


function App() {
  
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movies/:type" element={<h2>Movies List</h2>} />
      </Routes>
      <Footer />
    </div >
  ) 
}

export default App
