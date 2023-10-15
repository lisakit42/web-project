import SchedulItem from "./ScheduleItem/ScheduleItem";
import './Schedule.scss'
const array = ["1","2","3"]

const Schedule = () => {
    const date = new Date(Date.now());
    return <div className="scheduleWrapper">
      <SchedulItem date ={date.getDate()}  day={date.getDay()} week="I" subject = {array} className="Monday" />
      <SchedulItem date ={date.getDate() + 1}  day={date.getDay() + 1} week="I" subject = {array} className="Tuesday" />
      <SchedulItem date ={date.getDate() + 2}  day={date.getDay() + 2} week="I" subject = {array} className="Wednesday" />
      <SchedulItem date ={date.getDate() + 3}  day={date.getDay() + 3} week="I" subject = {array} className="Thursday" />
      <SchedulItem date ={date.getDate() + 4}  day={date.getDay() + 4} week="I" subject = {array} className="Friday" />
    </div>
}

export default Schedule;