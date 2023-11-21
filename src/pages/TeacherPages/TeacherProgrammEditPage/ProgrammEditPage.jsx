import ReactDOM from 'react-dom'
import LabTableRow from './LabTableRow'
import './ProgrammEditPage.scss'
import { useEffect, useState } from 'react'
import AddLabModal from './modal/AddLabModal'
import { useNavigate, useParams } from 'react-router-dom'


const portal = document.getElementById('modal');

const AddLab = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return <div>
        {isModalOpen && ReactDOM.createPortal(<AddLabModal count={props.count} setModalOpen={setModalOpen} />, portal)}
        <button className='addLabButton' onClick={() => { setModalOpen(true) }}>+Добавить лабу</button>
    </div>
}

const ProgrammEditPage = (props) => {
    const params = useParams();
    const programm = props.programms.filter((el) => `${el.id}` === params.programmId)[0]
    const navigate = useNavigate();
    return <div className="programmEditPageWrapper">
        <div className="backButton" onClick={() => navigate('/main')}>←Назад</div>
        <div className="programmInfo">
            <h1>{`${programm.subject}`}</h1>
            <h2>{`${programm.course} курс ${programm.sem} сем`}</h2>
        </div>
        <div className="greenLine"></div>
        <table className="labsTable">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Имя лабораторной работы</th>
                    <th>Начало</th>
                    <th>Дедлайн</th>
                </tr>
            </thead>
            <tbody>
                {props.labList.map((el) => <LabTableRow id={el.id} title={el.title} startDate={el.startDate} deadline={el.deadline} />)}
            </tbody>
        </table>
        <AddLab count={props.labList.length} />
    </div>
}

export default ProgrammEditPage