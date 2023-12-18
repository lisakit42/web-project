import { useNavigate } from "react-router-dom"
import "./ScheduleItem.scss"


const SchedulItem = (props) => {
    const daysArray = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 'Суббота']
    const monthsArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
    const navigate = useNavigate();

    let lessonIndex = 0;
    let lessons = [
        <td className="time">8:00<br />9:30</td>,
        <td className="time">9:45<br />11:15</td>,
        <td className="time">11:30<br />13:00</td>,
        <td className="time">13:50<br />15:20</td>,
        <td className="time">15:35<br />17:05</td>,
        <td className="time">17:20<br />18:50</td>
    ]

    return <div className={"scheduleItemWrapper " + props.className}>
        <h4 className={`cardTitle ${props.day === new Date().getDay() ? 'today' : ''}`}>{daysArray[props.day - 1]} | {`${props.date} ${monthsArray[props.month]}`} <span className={`ned-num ${props.day == new Date().getDay() ? "today" : ""}`}>{props.week_number === 1 ? 'I' : 'II'} неделя</span></h4>
        <table>
            <tbody>
                {lessons.map((lesson, i) => {
                    if (props.lessons[lessonIndex] && i + 1 === props.lessons[lessonIndex].Num) return <tr>
                        {lesson}
                        <td className={`type ${props.lessons[lessonIndex].Lecture ? 'lecture' : ''}`}></td>
                        <td id={`lesson_${props.day}_${lessonIndex}`} className="desc" style={props.lessons[lessonIndex].program ? { cursor: 'pointer' } : {cursor: 'default'}} onClick={event => {
                            props.lessons[event.currentTarget.id.split('_')[2]].program && navigate(`${JSON.parse(localStorage.getItem('lastType')) ? './subject/' : './programm-edit-page'}${JSON.parse(localStorage.getItem('lastType')) ? props.lessons[event.currentTarget.id.split('_')[2]].Teacher_id + '@' + props.lessons[event.currentTarget.id.split('_')[2]].program : '/' + props.lessons[event.currentTarget.id.split('_')[2]].program}`)
                        }} ><p>{props.lessons[lessonIndex].Subject}</p><p style={{fontSize: '14px',marginTop: '1px', opacity: '80%'}}>{JSON.parse(localStorage.getItem('lastType')) ? props.lessons[lessonIndex].Teacher : props.lessons[lessonIndex].Group}</p></td>
                        <td className="who-where">{props.lessons[lessonIndex].Class}{props.lessons[lessonIndex++].Building}</td>
                    </tr>
                    else return <tr>
                        {lesson}
                        <td className="type"></td>
                        <td className="desc"><a></a><br /></td>
                        <td className="who-where"></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default SchedulItem;