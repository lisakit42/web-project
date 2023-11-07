import SchedulItem from "./ScheduleItem/ScheduleItem";
import React, { useState } from 'react';
import './Schedule.scss'
import axios from "axios";
const array = ["1","2","3"]

const Schedule = () => {
  const [schedule, setSchedule] = useState(null)

  const scheduleApiUrl = 'https://www.anapioficeandfire.com/api/books?pageSize=30'

  const fetchData = async () => {
    const respone = await axios.get(scheduleApiUrl)
    
    setTimeout(() => {ScheduleItems.map((ScheduleItem, i) => {
      let date = new Date(respone.data[i].Day.split('/').join('-'));
      
      SchedulItem = <SchedulItem day={date.getDay()} date={date.getDate()} />
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