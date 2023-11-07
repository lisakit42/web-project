import "./ScheduleItem.scss"


const SchedulItem = (props) => {
    const daysArray = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"]
    const monthsArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

    
    // console.log(props.date)

    return <div className={"scheduleItemWrapper " + props.className}>
        <h4 className={`cardTitle ${props.day == new Date().getDay() ? 'today' : ''}`}>{daysArray[props.day - 1]} | {`${props.date} ${monthsArray[props.month]}`} <span className={`ned-num ${props.date == new Date().getDate() ? "today" : ""}`}>{props.week} неделя</span></h4>
        <table>
            <tbody>
                <tr>
                    <td className="time">8:00<br/>9:30</td>
                    <td className="desc"><a>{}</a><br/>{}</td>
                    <td className="who-where">415зр</td>
                </tr>
                <tr>
                    <td className="time">9:45<br/>11:15</td>
                    <td className="desc">{}</td>
                    <td className="who-where"></td>
                </tr>
                <tr>
                    <td className="time">11:30<br/>13:00</td>
                    <td className="desc">{}</td>
                    <td className="who-where"></td>
                </tr>
                <tr>
                    <td className="time">13:50<br/>15:20</td>
                    <td className="desc">{}</td>
                    <td className="who-where"></td>
                </tr>
                <tr>
                    <td className="time">15:35<br/>17:05</td>
                    <td className="desc">{}</td>
                    <td className="who-where"></td>
                </tr>
                <tr>
                    <td className="time">17:20<br/>18:50</td>
                    <td className="desc">{}</td>
                    <td className="who-where"></td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default SchedulItem;