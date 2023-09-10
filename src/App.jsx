import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { PocketProvider } from './contexts/PocketContexts';
import RequireAuth from './components/RequireAuth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsDetail from './components/newsdetail/NewsDetail';
import About from './components/about/About';
import Register from './components/register/Register';
import Login from './components/login/Login';


function App() {

  return (
    <div>
       <PocketProvider>
        <Router>
          <Routes>
            <Route path="/" element={<RequireAuth />} />
            <Route exact path="/news/:id" element={<NewsDetail/>}/>
            
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/login" element={<Login/>}/>
            
          </Routes>
        </Router>
      </PocketProvider>
    </div>
  )
}

export default App
