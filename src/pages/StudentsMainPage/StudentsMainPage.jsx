import { useNavigate } from "react-router-dom"
import Schedule from "../../components/Schedule/Schedule"
import "./StudentsMainPage.scss"

const StudentsMainPage = () => {
    const navigate = useNavigate()

    return <div className="studentMainPageWrapper">
        <div onClick={() => {navigate('./subject-labs')}} className="subjectNow">
            <p>Текущая пара:</p>
            <p className="subjectName">Математичексий анализ</p>
            <p className="where">215зр</p>
        </div>
        <Schedule />
    </div>
}

export default StudentsMainPage;