import { useState } from 'react'
import './CreateProgrammTile.scss'
import plus from './img/plus.svg'
import axios from 'axios';
import Loading from '../../../../../components/Loading/Loading';

const data = [{
    faculty: 'ФПИ',
    groups: ['ИТ', 'ПИ', 'БИ']
},
{
    faculty: 'ЭК',
    groups: ['1', '2', '3']
},
{
    faculty: 'АГР',
    groups: ['4', '5', '6']
}]

const CreateProgrammTile = (props) => {
    const [create, setCreate] = useState(false)
    const [close, setClose] = useState(false)
    const [info, setInfo] = useState({ semestr: '1 курс 1 семестр', faculty: data[0].faculty, group: data[0].groups[0] })
    const [loading, setLoading] = useState(false)
    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
    const addProgrammApi = '/programm'
    let groupsList = data.filter(el => el.faculty === info.faculty)[0].groups

    const SelectHandler = (event) => {
        switch (event.target.id) {
            case 'semestr':
                setInfo({ ...info, semestr: event.target.value }); break;
            case 'faculty':
                setInfo({ ...info, faculty: event.target.value }); break;
            case 'group':
                setInfo({ ...info, group: event.target.value }); break;
            default:
                console.log('INCORRECT_INPUT'); break;
        }
    }

    if (groupsList[0] !== info.group) setInfo({ ...info, group: groupsList[0] })

    return create ?
        <div className="TileWrapper create">
            <select id="semestr" onChange={SelectHandler} name="semestr">
                <option value="1 курс 1 семестр">1 курс 1 семестр</option>
                <option value="1 курс 2 семестр">1 курс 2 семестр</option>
                <option value="2 курс 1 семестр">2 курс 1 семестр</option>
                <option value="2 курс 2 семестр">2 курс 2 семестр</option>
                <option value="3 курс 1 семестр">3 курс 1 семестр</option>
                <option value="3 курс 2 семестр">3 курс 2 семестр</option>
                <option value="4 курс 1 семестр">4 курс 1 семестр</option>
                <option value="4 курс 2 семестр">4 курс 2 семестр</option>
                <option value="5 курс 1 семестр">5 курс 1 семестр</option>
                <option value="5 курс 2 семестр">5 курс 2 семестр</option>
                <option value="6 курс 1 семестр">6 курс 1 семестр</option>
                <option value="6 курс 2 семестр">6 курс 2 семестр</option>
            </select>
            <select id="faculty" onChange={SelectHandler} name="faculty">
                {data.map(el => <option value={el.faculty}>{el.faculty}</option>)}
            </select>
            <select id="group" onChange={SelectHandler} onSelect={() => { console.log('select') }} name="group">
                {groupsList.map(el => <option value={el}>{el}</option>)}
            </select>
            <button onClick={() => {
                setLoading(true);
                axios.post(addProgrammApi,
                    {
                        teacher_id: JSON.parse(localStorage.getItem('user')).Id,
                        subject: props.subject, course: info.semestr.split(' ')[0],
                        sem: info.semestr.split(' ')[2],
                        faculty: info.faculty,
                        group: info.group
                    }).then(res => props.addTile(
                        {
                            Id: res.data,
                            sem: info.semestr,
                            faculty: info.faculty,
                            group: info.group
                        }
                    )).catch(err => console.log(err))
            }}>Сохранить</button>
            <div className={`createLoadingWrapper ${loading ? 'show' : ''}`}>
                <Loading />
            </div>
            <button className="cancelButton" onClick={el => {
                el.target.offsetParent.classList.toggle('cancel');
                setTimeout(() => { setCreate(false); setClose(true) }, 200)
            }}>Отменить</button>
        </div>
        :
        <div onClick={(el) => { el.currentTarget.classList.add('hide'); setTimeout(() => { setCreate(true) }, 100) }} className={`createTileWrapper ${close ? 'afterClose' : ''}`}>
            <img src={plus} alt='' className="plusButton"></img>
        </div>
}

export default CreateProgrammTile;