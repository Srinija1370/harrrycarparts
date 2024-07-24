import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/navbar' element = {<Navbar />} />
        <Route path='/' element = {<Home />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/footer' element = {<Footer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
