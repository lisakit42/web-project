import { useState, useEffect } from 'react'
import './TeacherProgrammsList.scss'
import ProgrammTile from './components/ProgrammTile/ProgrammTile'
import TilesContainer from './components/TileContainer/TilesContainer';
import axios from "axios";
import Loading from '../../../components/Loading/Loading';

const TeacherProgrammsList = () => {
    const [programmsList, setProgrammsList] = useState([])
    const [subjectsList, setSubjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [fetched, setFetched] = useState(false)
    let choosedSubject = subjectsList[0];

    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
    const TeacherProgrammsApiUrl = `/programm/${JSON.parse(localStorage.getItem('user')).Id}`
    const SubjectsListApiUrl = '/programm/subjects';

    const fetchSubjects = async (tempData) => {
        await axios.get(SubjectsListApiUrl).then(res => { setSubjects(res.data.filter(subj => !tempData.filter(prog => subj === prog.subject).length)) })
        setFetched(true)
        setProgrammsList(listBuild(tempData))
        setLoading(false)
    }

    const fetchProgramms = async () => {
        await axios.get(TeacherProgrammsApiUrl).then(res => { fetchSubjects(res.data) }).catch(err => console.log(err))
    }

    if (!fetched) fetchProgramms();


    const listBuild = (programms) => {
        console.log('билд')
        const programmsList = []
        let tiles = []
        programms.forEach((el) => {
            el.programms.forEach((el, i) => {
                tiles.push(<ProgrammTile tileIndex={tiles.length} programmInfo={el} />)
            })
            // console.log(tiles)
            programmsList.push(<TilesContainer fetchProgramms={() => {fetchProgramms()}} subject={el.subject} tiles={tiles} />)
            tiles = []
        });

        return programmsList;
    }

    return <div className="programmsListWrapper">
        {loading ? <Loading height='300' /> : programmsList}
        <div className='addSubjectWrapper'>
            <select onChange={el => { choosedSubject = el.target.value }} name="" id="">
                {subjectsList.map((el, i) => <option key={`subject-${i}`} value={el}>{el}</option>)}
            </select>
            <button disabled={!subjectsList.length} onClick={(el) => { setProgrammsList([...programmsList, <TilesContainer subject={choosedSubject} tiles={[]} />]); setSubjects(subjectsList.filter(subj => subj !== choosedSubject)) }}>Добавить предмет</button>
        </div>
    </div>
}

export default TeacherProgrammsList