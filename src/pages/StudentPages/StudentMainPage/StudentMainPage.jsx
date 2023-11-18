import { useNavigate } from "react-router-dom"
import Schedule from "../../../components/Schedule/Schedule"
import "./StudentMainPage.scss"

const StudentMainPage = (props) => {
    const navigate = useNavigate()
    props.history.push('Имя предмета')
    return <div className="studentMainPageWrapper">
        <div onClick={() => {navigate('./subject-labs')}} className="subjectNow">
            <p>Текущая пара:</p>
            <p className="subjectName">Математичексий анализ</p>
            <p className="where">215зр</p>
        </div>
        <Schedule />
    </div>
}

export default StudentMainPage;