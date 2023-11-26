import { useState, useEffect } from 'react'
import './TeacherProgrammsList.scss'
import ProgrammTile from './components/ProgrammTile/ProgrammTile'
import TilesContainer from './components/TileContainer/TilesContainer';
import axios from "axios";
import Loading from '../../../components/Loading/Loading';


const subjects = ['Прикладная информатика', 'Базы данных', 'Микроэлектроника', 'Математический анализ', 'Приемы проектирования', 'Основы языков программирования']

const TeacherProgrammsList = () => {
    const [programmsList, setProgrammsList] = useState([])
    const [loading, setLoading] = useState(true)
    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
    const TeacherProgrammsApiUrl = `/programm/${JSON.parse(localStorage.getItem('user')).Id}`
    const subjectsList
    let choosedSubject = subjects[0];
    const fetchProgramms = () => {
        const respone = axios.get(TeacherProgrammsApiUrl)
        respone.then(res => {setProgrammsList(listBuild(res.data)); setLoading(false)})
        axios.get()
    }

    useEffect(fetchProgramms, [])

    const listBuild = (programms) => {
        const programmsList = []
        let tiles = []
        programms.forEach((el) => {
            el.programms.forEach((el, i) => {
                tiles.push(<ProgrammTile tileIndex={tiles.length} programmInfo={el} />)
            })
            programmsList.push(<TilesContainer subject={el.subject} tiles={tiles} />)
            console.log(tiles)
            tiles = []
        });

        return programmsList;
    }

    return <div className="programmsListWrapper">
        {loading ? <Loading height='300'/> : programmsList}
        <div className='addSubjectWrapper'>
            <select onChange={el => {choosedSubject = el.target.value}} name="" id="">
                {subjects.map((el, i) => <option key={`subject-${i}`} value={el}>{el}</option>)}
            </select>
            <button onClick={(el) => { setProgrammsList([...programmsList, <TilesContainer subject={choosedSubject} tiles={[]} />]) }}>Добавить предмет</button>
        </div>
    </div>
}

export default TeacherProgrammsList