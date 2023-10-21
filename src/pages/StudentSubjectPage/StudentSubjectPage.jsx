import "./StudentSubjectPage.scss"
import LabsLine from "./components/LabsLine"

const LabRow = (props) => { 
    return <div id={props.id} className="labRow">
        <h2>{props.id + 1 + "# "}</h2>
        <h3>{props.title}</h3>
        <h4>{props.date}</h4>
    </div>
}

const labList = [{title: 'Учимся писать в ворде', deadline: '01.09.2023', link: ''},
                 {title: 'Писать в ворде научились, учимся качать редактор поинтереснее', deadline: '07.09.2023', link: ''},
                 {title: 'Ohmygod, is it sharp C?', deadline: '21.09.2023', link: ''},
                 {title: 'Oh, no, it is Java.', deadline: '05.10.2023', link: ''},
                 {title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: ''}
                ].map((el,i) => <LabRow id={i} title={el.title} date={el.deadline} link={el.link}/>)

const StudentSubjectPage = () => {
    return <div className="StudentSubjectPage">
        <div className="LabsStatic">
            <h1>Разработка ПО</h1>
            <h5>Фамилия преподователя</h5>
            <LabsLine />
        </div>
        <div className="blackLine"></div>
        <div className="labsListWrapper">
            {labList}
        </div>
    </div>
}

export default StudentSubjectPage