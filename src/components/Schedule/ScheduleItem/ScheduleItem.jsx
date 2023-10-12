import "./ScheduleItem.scss"

const SchedulItem = () => {
    return <div>
        <h4 className="cardTitle">Понедельник | 9 октября<span className="today ned-num"> I неделя</span></h4>
        <table>
            <tbody>
                <tr>
                    <td className="time">8:00<br/>9:30</td>
                    <td className="desc"><a>Основы Web-инжиниринга</a><br/>Лаптев</td>
                    <td className="who-where">415зр</td>
                </tr>
                <tr>
                    <td className="time">9:45<br/>11:15</td>
                    <td className="desc">1</td>
                    <td className="who-where"></td>
                </tr>
                <tr>
                    <td className="time">11:30<br/>13:00</td>
                    <td className="desc"></td>
                    <td className="who-where"></td>
                </tr>
                <tr>
                    <td className="time">13:50<br/>15:20</td>
                    <td className="desc"></td>
                    <td className="who-where"></td>
                </tr>
                <tr>
                    <td className="time">15:35<br/>17:05</td>
                    <td className="desc"></td>
                    <td className="who-where"></td>
                </tr>
                <tr>
                    <td className="time">17:20<br/>18:50</td>
                    <td className="desc"></td>
                    <td className="who-where"></td>
                </tr>
            </tbody>
        </table>
    </div>
}

export default SchedulItem;