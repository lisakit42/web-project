import { useNavigate } from "react-router-dom"
import Schedule from "../../../components/Schedule/Schedule"
import "./TeacherMainPage.scss"

const TeacherMainPage = () => {
    const navigate = useNavigate()

    return <div className="teacherMainPageWrapper">
        <div onClick={() => {navigate('./')}} className="subjectNow">
            <p>Текущая пара:</p>
            <p className="subjectName">Математичексий анализ</p>
            <p className="who">ИТ2003</p>
            <p className="where">215зр</p>
        </div>
        <Schedule />
    </div>
}

export default TeacherMainPage;