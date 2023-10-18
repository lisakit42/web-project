import "./StudentSubjectPage.scss"
import LabsLine from "./components/LabsLine"
import Header from "../../components/Header/Header"

const StudentSubjectPage = () => {
    return <div className="StudentSubjectPage">
        <Header />
        <div className="LabsStatic">
            <h1>Разработка ПО</h1>
            <h5>Фамилия преподователя</h5>
            <LabsLine />
        </div>
    </div>
}

export default StudentSubjectPage