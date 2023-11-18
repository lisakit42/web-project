import ScheduleItem from "./ScheduleItem/ScheduleItem";
import React, { useEffect, useState } from 'react';
import './Schedule.scss'
import axios from "axios";

const ScheduleItems = []

const Schedule = () => {
  const [schedule, setSchedule] = useState(null)
  const actualWeek = (Math.ceil((Date.parse(new Date()) - Date.parse('Sep, 1, 2023'))/1000/60/60/24/7)%2) ? '1' : '2';
  axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
  
  const scheduleApiUrl = `/schedule/${JSON.parse(localStorage.getItem('user')).Group}@${2}`
  console.log(scheduleApiUrl)
  const insertData = () => {
    if (schedule && !ScheduleItems.length) {
      for (let i = 0; i < 5; i++) {
        let date = new Date(schedule[i].Day.split('/').join('-'));
        ScheduleItems.push(
          <ScheduleItem key={`scheduleItem-${i}`} week_number={schedule[i].Week_number} className={`d${i + 1}`} day={date.getDay()} date={date.getDate()} month={date.getMonth()} lessons={schedule[i].lessons} />
        )
      }
    }
  }

  const fetchData = () => {
    console.log(actualWeek)
    const respone = axios.get(scheduleApiUrl)
    respone.then((res) => {setSchedule(res.data)}).catch(err => console.log(err))   
  }

  useEffect(fetchData,[]);
  insertData();
  
  return <div className="scheduleWrapper">
    {ScheduleItems}
  </div>
}

export default Schedule;