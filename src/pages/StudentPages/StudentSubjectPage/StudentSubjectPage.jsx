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

const StudentSubjectPage = () => {
    
    const labList = [
        { title: 'Учимся писать в ворде', deadline: '01.09.2023', link: '', status: '1' },
        { title: 'Писать в ворде научились, учимся качать редактор поинтереснее', deadline: '07.09.2023', link: '', status: '1' },
        { title: 'Ohmygod, is it sharp C?', deadline: '21.09.2023', link: '', status: '2' },
        { title: 'Oh, no, it is Java.', deadline: '05.10.2023', link: '', status: '3' },
        { title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '0' },
        { title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' },
        { title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' },
        { title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' }]
    
    const navigate = useNavigate()
    return <div className="StudentSubjectPage">
        <div className="backButton" onClick={() => navigate('/.')}>←Назад</div>
        <div className="LabsStatic">
            <h1>Разработка ПО</h1>
            <h5>Фамилия преподователя</h5>
            <LabsLine labs={labList} />
        </div>
        <div className="blackLine"></div>
        <div className="labsListWrapper">
            {labList.map((el,i) => <LabRow id={i} title={el.title} date={el.deadline} link={el.link}/>)}
        </div>
    </div>
}

export default StudentSubjectPage