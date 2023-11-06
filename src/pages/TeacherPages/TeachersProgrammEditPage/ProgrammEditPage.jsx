import ReactDOM from 'react-dom'
import LabTableRow from './LabTableRow'
import './ProgrammEditPage.scss'
import { useState } from 'react'

const portal = document.getElementById('modal');

const AddLabModal = (props) => {
    return <div className='addModalWrapper' id='addLabModal'>
        <div className='addLabModal'>
            <h1>Добавить новую лабораторную работу</h1>
            <div className="nameInputWrapper">
                <input type="text" id='name' onBlur={el => { if (!el.target.value) el.target.labels[0].classList.remove('ff') }} onFocus={el => el.target.labels[0].classList.add('ff')} className='labNameInput' />
                <label className='nameLabel' onClick={el => console.log(el.target.offsetParent)} htmlFor='name'>Название</label>
            </div>
            <div className="startInputWrapper">
                <label htmlFor="startDatePicker">Выберите дату начала:</label>
                <br />
                <input type="date" id='startDatePicker' className='startDatePicker' />
            </div>
            <input type="date" />
            <br />
            <input type="file" />
            <button onClick={() => {let wrap = document.querySelector('.addModalWrapper');wrap.classList.add('disappear');props.setModalOpen(true); setTimeout(() => {props.setModalOpen(false)}, 2000) }}>Закрыть</button>
        </div>

    </div>
}

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
                    <th>файл</th>
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