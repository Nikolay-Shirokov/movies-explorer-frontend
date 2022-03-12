import './App.css';
import Main from "../Main/Main";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="page">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
