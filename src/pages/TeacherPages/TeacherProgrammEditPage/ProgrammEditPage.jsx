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
        <button className='addLabButton' onClick={() => { setModalOpen(true) }}>+Добавить лабу</button>
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
                        link={el.link} />)}
            </tbody>
        </table> : null}
        {info.f ? null : info.subject ? <AddLab count={info.labs.length} programmId={params.programmId} addLab={(lab) => { setInfo({ ...info, labs: [...info.labs, lab] }) }} /> : null}
    </div>
}

export default ProgrammEditPage