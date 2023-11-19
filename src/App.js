import './App.css';
import Authorization from './pages/AuthorizationPage/Authorization';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';


function App() {
  console.log(localStorage.getItem('user'))
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="/main/*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;