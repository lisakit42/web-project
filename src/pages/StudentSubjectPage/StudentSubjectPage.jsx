import "./StudentSubjectPage.scss"
import LabsLine from "./components/LabsLine"

const StudentSubjectPage = () => {
    return <div className="StudentSubjectPage">
        <div className="LabsStatic">
            <h1>Разработка ПО</h1>
            <h5>Фамилия преподователя</h5>
            <LabsLine />
        </div>
    </div>
}

export default StudentSubjectPage