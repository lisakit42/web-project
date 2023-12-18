import ReactDOM from 'react-dom'
import LabTableRow from './LabTableRow'
import './ProgrammEditPage.scss'
import { useEffect, useState } from 'react'
import AddLabModal from './modal/AddLabModal'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../../components/Loading/Loading'


const portal = document.getElementById('modal');

const AddLab = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return <div>
        {isModalOpen && ReactDOM.createPortal(<AddLabModal addLab={props.addLab} count={props.count} setModalOpen={setModalOpen} programmId={props.programmId} />, portal)}
        <button className='addLabButton' onClick={() => { setModalOpen(true) }}><svg viewBox="0 0 308 308" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 185.75L122 185.75L122 295C122 301.627 127.373 307 134 307L174 307C180.627 307 186 301.627 186 295L186 185.75L295.25 185.75C301.877 185.75 307.25 180.377 307.25 173.75L307.25 133.75C307.25 127.123 301.877 121.75 295.25 121.75L186 121.75L186 12.5C186 5.87258 180.627 0.499993 174 0.499992L134 0.499987C127.373 0.499986 122 5.87257 122 12.5L122 121.75L12.75 121.75C6.12261 121.75 0.750024 127.123 0.750023 133.75L0.750017 173.75C0.750017 180.377 6.1226 185.75 12.75 185.75Z" stroke="black"/>
</svg>
</button>
    </div>
}

const ProgrammEditPage = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [info, setInfo] = useState({ f: 'f' })
    axios.defaults.baseURL = 'http://web-project.somee.com/project/api';

    const getProgrammApi = `/lab/${JSON.parse(localStorage.getItem('user')).Id}/${params.programmId}`;
    const fetchProgramm = async () => {
        await axios.get(getProgrammApi).then(res => { setInfo(res.data) }).catch(err => console.log(err))
    }

    useEffect(() => { fetchProgramm() }, [])

    return <div className="programmEditPageWrapper">
        <div className="backButton" onClick={() => navigate('/main')}>←Назад</div>
        {info.f ? <Loading height='187' /> : info.subject ? <div className="programmInfo">
            <h1>{`${info.subject}`}</h1>
            <h2>{`${info.course} курс ${info.sem} семестр`}</h2>
        </div> : <div style={{ margin: '0 auto', marginTop: '73px', marginBottom: '29px' }}><h1 style={{ fontSize: '70px' }}>404 Not foung</h1></div>}
        <div className="greenLine"></div>
        {info.f ? <Loading /> : info.subject ? <table className="labsTable">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Имя лабораторной работы</th>
                    <th>Начало</th>
                    <th>Дедлайн</th>
                </tr>
            </thead>
            <tbody>
                {info.subject && info.subject.length && info.labs.map((el, i) =>
                    <LabTableRow deleteLab={
                        id => {
                            setInfo({
                                ...info,
                                labs: info.labs.filter(el => el.id !== id)
                            })
                        }}
                        number={i + 1}
                        id={el.id}
                        title={el.name}
                        beginDate={el.beginDate}
                        deadline={el.deadline}
                        link={el.link} editLab={(lab, index) => { setInfo({...info, labs: info.labs.map((el, i) => i === index ? lab : el )})}} />)}
            </tbody>
        </table> : null}
        {info.f ? null : info.subject ? <AddLab count={info.labs.length} programmId={params.programmId} addLab={(lab) => { setInfo({ ...info, labs: [...info.labs, lab] }) }} /> : null}
    </div>
}

export default ProgrammEditPage