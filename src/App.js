import './App.css';
import Authorization from './components/AuthorizationPage/Authorization';
import Header from './components/Header/Header';
import SchedulItem from './components/Schedule/ScheduleItem/ScheduleItem';

function App() {
  return (
    <div className="App">
      <Authorization/>
      <SchedulItem/>
    </div>
  );
}

export default App;