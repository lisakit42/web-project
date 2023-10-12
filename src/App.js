import './App.css';
import Authorization from './components/AuthorizationPage/Authorization';
import Header from './components/Header/Header';
import SchedulItem from './components/Schedule/ScheduleItem/ScheduleItem';

const array = ["1","2","3"]

function App() {
  return (
    <div className="App">
      {/* <Authorization/> */}
      <SchedulItem subject = {array}/>
      
    </div>
  );
}

export default App;