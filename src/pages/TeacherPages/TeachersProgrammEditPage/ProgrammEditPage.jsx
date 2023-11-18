import ReactDOM from 'react-dom'
import LabTableRow from './LabTableRow'
import './ProgrammEditPage.scss'
import { useState } from 'react'
import uploadSvg from './svg/uploadFile.svg'
import AddLabModal from './modal/AddLabModal'

const portal = document.getElementById('modal');

const AddLab = (props) => {
    const [isModalOpen, setModalOpen] = useState(true);
    console.log(isModalOpen)
    return <div>
        {isModalOpen && ReactDOM.createPortal(<AddLabModal count={props.count} setModalOpen={setModalOpen} />, portal)}
        <button className='addLabButton' onClick={() => { setModalOpen(true) }}>+Добавить лабу</button>
    </div>
}

const ProgrammEditPage = (props) => {
    return <div className="programmEditPageWrapper">
        <div className="programmInfo">
            <h1>1 курс 1 сем</h1>
            <h5>Математический анализ</h5>
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