import './App.css';
import Authorization from './pages/AuthorizationPage/Authorization';
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import SchedulItem from './components/Schedule/ScheduleItem/ScheduleItem';
import ProgrammTile from './pages/ProgrammsPage/components/ProgrammTile/ProgrammTile';
import StudentSubjectPage from './pages/StudentSubjectPage/StudentSubjectPage';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';


function App() {
  console.log(localStorage.getItem('student'))
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;