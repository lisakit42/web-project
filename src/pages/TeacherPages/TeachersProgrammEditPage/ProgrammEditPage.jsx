import ReactDOM from 'react-dom'
import LabTableRow from './LabTableRow'
import './ProgrammEditPage.scss'
import { useState } from 'react'

const portal = document.getElementById('modal');

const AddLabModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    console.log(isModalOpen)
    return <div className='addModalWrappew'>
        {isModalOpen && ReactDOM.createPortal(<div className='addModalWrapper'>
            <button onClick={() => {setModalOpen(false)}}>Закрыть</button>
        </div>, portal)}
        <button className='addLabButton'onClick={() => {setModalOpen(true)}}>+Добавить лабу</button>
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
                    <th>файл</th>
                </tr>
            </thead>
            <tbody>
                {props.labList.map((el) => <LabTableRow id={el.id} title={el.title} startDate={el.startDate} deadline={el.deadline}/>)}
            </tbody>
        </table>
        <AddLabModal/>
    </div>
}

export default ProgrammEditPage