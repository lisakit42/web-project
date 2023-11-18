import { useNavigate } from "react-router-dom"
import "./StudentSubjectPage.scss"
import LabsLine from "./components/LabsLine"

const LabRow = (props) => { 
    return <div id={props.id} className="labRow">
        <h2>{props.id + 1 + "# "}</h2>
        <h3>{props.title}</h3>
        <h4>{props.date}</h4>
    </div>
}

const StudentSubjectPage = (props) => {
    const navigate = useNavigate()
    return <div className="StudentSubjectPage">
        <div className="backButton" onClick={() => navigate('/.')}>←Назад</div>
        <div className="LabsStatic">
            <h1>Разработка ПО</h1>
            <h5>Фамилия преподователя</h5>
            <LabsLine labs={props.labList} />
        </div>
        <div className="blackLine"></div>
        <div className="labsListWrapper">
            {props.labList.map((el,i) => <LabRow id={i} title={el.title} date={el.deadline} link={el.link}/>)}
        </div>
    </div>
}

export default StudentSubjectPage