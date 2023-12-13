import ScheduleItem from "./ScheduleItem/ScheduleItem";
import React, { useEffect, useState } from 'react';
import './Schedule.scss'
import axios from "axios";
import Loading from "../Loading/Loading";

const ScheduleItems = []

const Schedule = () => {
  const [ScheduleItems, setScheduleItems] = useState([])
  const actualWeek = (Math.ceil((Date.parse(new Date()) - Date.parse('Sep, 1, 2023')) / 1000 / 60 / 60 / 24 / 7) % 2) ? '1' : '2';
  axios.defaults.baseURL = 'http://web-project.somee.com/project/api'

  const scheduleApiUrl = JSON.parse(localStorage.getItem('user')).Type ? `/schedule/${3}@${2}` : `/schedule/teachers/${JSON.parse(localStorage.getItem('user')).Id}`

  const insertData = (schedule) => {
    const tempItems = [];

    for (let i = 0; i < schedule.length; i++) {
      let date = new Date(schedule[i].Day);
      tempItems.push(
        <ScheduleItem key={`scheduleItem-${i}`} week_number={schedule[i].Week_number} className={`d${i + 1}`} day={date.getDay()} date={date.getDate()} month={date.getMonth()} lessons={schedule[i].lessons} />
      )
    }

    setScheduleItems(tempItems)
  }

  const fetchData = () => {
    console.log('first')
    const respone = axios.get(scheduleApiUrl)
    respone.then((res) => { insertData(res.data) }).catch(err => console.log(err))
  }

  useEffect(fetchData, []);

  return <div className="scheduleWrapper">
    {ScheduleItems.length ? ScheduleItems : <Loading height='400' />}
  </div>
}

export default Schedule;