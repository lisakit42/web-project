import { useNavigate, useParams } from "react-router-dom"
import "./StudentSubjectPage.scss"
import LabsLine from "./components/LabsLine"
import { useEffect, useState } from "react"
import Loading from "../../../components/Loading/Loading"
import axios from "axios"

const LabRow = (props) => {
    const date = new Date(new Date(props.info.deadline))
    console.log(date)
    return <a href={props.info.link} id={props.info.index} className="labRow">
        <span className="downloadLabBtn">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M4628 9493 l-3 -2408 -851 -5 -850 -5 1642 -2173 c903 -1195 1646 -2174 1651 -2175 4 0 748 978 1651 2174 l1644 2174 -851 3 -851 2 0 2410 0 2410 -1590 0 -1590 0 -2 -2407z" />
                    <path d="M2140 1870 l0 -620 4310 0 4310 0 0 620 0 620 -4310 0 -4310 0 0 -620z" />
                </g>
            </svg>
        </span>
        <h2>{props.info.index + 1 + " "}</h2>
        <h3>{props.info.name}</h3>
        <h4>{`${date.getDate() > 9 ? date.getDate() : '0' + date.getDate()}.${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + date.getMonth() + 1}.${date.getFullYear()}`}</h4>
    </a>
}

const StudentSubjectPage = (props) => {
    const [info, setInfo] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const navigate = useNavigate()

    axios.defaults.baseURL = 'http://web-project.somee.com/project/api';
    const getProgrammApi = `/lab/${params.programmInfo.split('@')[0]}/${params.programmInfo.split('@')[1]}`;

    const fetchProgramm = () => {
        axios.get(getProgrammApi).then(res => { setInfo({ ...res.data, labs: res.data.labs.filter(el => new Date(el.beginDate) < new Date()) }); setLoading(false) }).catch(err => alert(err))
    }

    useEffect(() => { fetchProgramm() }, [])
    console.log(info)
    return <div className="StudentSubjectPage">
        
        {loading ? <Loading height='250' /> : <div className="LabsStatic">
        <div className="backButton" onClick={() => navigate('/main')}>←Назад</div>
            <h1>{info.subject}</h1>
            <h5>{info.teacher.split(' ')[0] + ' ' + info.teacher.split(' ')[1][0] + '.'}</h5>
            {info.labs && info.labs.length ? <LabsLine labs={info.labs} /> : '' }
        </div>}
        {!info.labs ? '' : info.labs.length ? <div className="blackLine"></div> : <h1 style={{color: 'rgb(93, 93, 93)', marginTop: '180px'}}>Преподаватель пока не загрузил ни одной работы</h1>}
        <div className="labsListWrapper">
            {loading ? <Loading /> : info.labs.map((el, i) => <LabRow info={{ ...el, index: i }} />)}
        </div>
    </div>
}

export default StudentSubjectPage