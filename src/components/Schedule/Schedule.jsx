import SchedulItem from "./ScheduleItem/ScheduleItem";
import React, { useState } from 'react';
import './Schedule.scss'
import axios from "axios";
const array = ["1","2","3"]

const Schedule = () => {
  const [schedule, setSchedule] = useState(null)

  const scheduleApiUrl = 'http://web-project.somee.com/project/api/schedule'

  const ScheduleItems = [	
    <SchedulItem day={1} className="Monday" />,	
    <SchedulItem day={2}className="Tuesday" />,	
    <SchedulItem day={3}className="Wednesday" />,	
    <SchedulItem day={4}className="Thursday" />,	
    <SchedulItem day={5}className="Friday" />]

  const fetchData = async () => {
    const respone = await axios.get(scheduleApiUrl)
    
    setTimeout(() => {ScheduleItems.map((ScheduleItem, i) => {
      let date = new Date(respone.data[i].Day.split('/').join('-'));
      
      ScheduleItem = <SchedulItem day={date.getDay()} date={date.getDate()} />
    });setSchedule(respone.data); console.log(ScheduleItems)},1000)
    
    
    
  }
  const date = new Date(Date.now());
  const oldDate = new Date('12-16-2022').getDay()
  console.log(oldDate)

  return <div className="scheduleWrapper">
    <button onClick={fetchData}>fetchData</button>
    {ScheduleItems}
  </div>
}

export default Schedule;