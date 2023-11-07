import ScheduleItem from "./ScheduleItem/ScheduleItem";
import React, { useEffect, useState } from 'react';
import './Schedule.scss'
import axios from "axios";

const Schedule = () => {
  const [schedule, setSchedule] = useState(null)
  const [ScheduleItems, setScheduleItems] = useState([])
  const scheduleApiUrl = 'http://web-project.somee.com/project/api/schedule'

  const fetchData = () => {
    const respone = axios.get(scheduleApiUrl)
    respone.then((res) => {setSchedule(res.data)})    
  }
  const insertData = () => {
    if (schedule && !ScheduleItems.length) {
      for (let i = 0; i < 5; i++) {
        let date = new Date(schedule[i].Day.split('/').join('-'));
        ScheduleItems.push(
          <ScheduleItem key={i} week_number={schedule[i].Week_number} className={`d${i + 1}`} day={date.getDay()} date={date.getDate()} month={date.getMonth()} lessons={schedule[i].lessons} />
        )
        console.log(ScheduleItems);
      }
      setScheduleItems(ScheduleItems)
    }
  }
  
  useEffect(fetchData,[]);
  insertData();
  console.log(schedule)
  console.log(ScheduleItems)
  return <div className="scheduleWrapper">
    {ScheduleItems}
  </div>
}

export default Schedule;