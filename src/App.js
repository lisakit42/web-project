import './App.css';
import Authorization from './components/AuthorizationPage/Authorization';
import Header from './components/Header/Header';
import Schedule from './components/Schedule/Schedule';
import SchedulItem from './components/Schedule/ScheduleItem/ScheduleItem';

const array = ["1","2","3"]
function App() {
  const date = new Date(Date.now());
  console.log(date.getDate())
  return (
    <div className="App">
      {/* <Authorization/> */}
      {/* <SchedulItem date ={date.getDate() - 1}  day={date.getDay() - 1} week="I" subject = {array}/> */}
      {/* <SchedulItem date ={date.getDate()} day={date.getDay()} week="I" subject = {array}/> */}
      <Schedule />
    </div>
  );
}

export default App;