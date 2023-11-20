import { useNavigate } from "react-router-dom"
import Schedule from "../../../components/Schedule/Schedule"
import "./TeacherMainPage.scss"
import TeacherProgrammsList from "../TeacherProgrammsList/TeacherProgrammsList"

const TeacherMainPage = () => {
    const navigate = useNavigate()

    return <div className="teacherMainPageWrapper">
        <div onClick={() => {navigate('./programm-edit-page')}} className="subjectNow">
            <p>Текущая пара:</p>
            <p className="subjectName">Математичексий анализ</p>
            <p className="who">ИТ2003</p>
            <p className="where">215зр</p>
        </div>
        <Schedule />
        <TeacherProgrammsList />
    </div>
}

export default TeacherMainPage;