import { useEffect, useState } from 'react'
import './CreateProgrammTile.scss'
import plus from './img/plus.svg'

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

let sem = '1 курс 1 семестр', faculty = data[0].faculty, group = data[0].groups[0];
const CreateProgrammTile = (props) => {
    const [create, setCreate] = useState(false)
    const [filtGroups, setGroups] = useState([])

    const facultySelectHandler = (event) => {
        setGroups(data.filter(el => el.faculty === event.target.value).map(el => el.groups)[0].map(el => <option value={el}>{el}</option>))
    }

    useEffect(() => { facultySelectHandler({ target: { value: data[0].faculty } }) }, [])

    return create ?
        <div className="TileWrapper create">
            <select onChange={el => { sem = el.target.value }} onClick={(el) => { console.log(el.target.value) }} id="semestr" name="semestr">
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
            <select id="faculty" onChange={(el) => { facultySelectHandler(el); faculty = el.target.value }} name="faculty">
                {data.map(el => <option value={el.faculty}>{el.faculty}</option>)}
            </select>
            <select id="group" onChange={el => { group = el.target.value }} name="group">
                {filtGroups}
            </select>
            <button onClick={() => { props.addTile({ id: 31, sem: sem, faculty: faculty, group: group }) }}>сохранить</button>
        </div>
        :
        <div onClick={() => { setCreate(true) }} className="createTileWrapper">
            <img src={plus} alt='' className="plusButton"></img>
        </div>
}

export default CreateProgrammTile;