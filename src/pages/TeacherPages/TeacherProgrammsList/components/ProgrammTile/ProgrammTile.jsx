import { useNavigate } from "react-router-dom"
import Logo from "./KubsauLogo.svg"
import deleteIcon from "./delete.svg"
import "./ProgrammTile.scss"
import { useState } from "react"
import axios from "axios"
import Loading from "../../../../../components/Loading/Loading"


const ProgrammTile = (props) => {
    const navigate = useNavigate()
    const [deletePrevent, setDeletePrevent] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [loading, setLoading] = useState(false)
    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'

    const deleteProgrammApi = `/programm/${props.programmInfo.Id}`
    return <div id={`programm-${props.programmInfo.Id}`} className={'TileWrapper ' + (deleted ? 'deleted' : '')} onClick={() => { navigate(`./programm-edit-page/${props.programmInfo.Id}`) }} >
        <img className="backLogo" src={Logo} />
        <div className="deleteButton" onClick={(event) => { setDeletePrevent(true); event.stopPropagation()}}><img src={deleteIcon} alt="" /></div>
        {deletePrevent ? <div className="TileWrapper deletePreventWindow">
            <p>Удалить программу?</p>
            <div className="deletePreventButtons">
                <button className="accept" onClick={(event) => {setLoading(true); event.stopPropagation(); axios.delete(deleteProgrammApi).then(() => { props.gapInc(); setLoading(false); setDeleted(true); props.fetchProgramms(); setTimeout(() => {document.getElementById(`programm-${props.programmInfo.Id}`).remove();}, 200)}).catch(err => console.log(err))}}>Да</button>
                <button onClick={(el) => { el.target.offsetParent.classList.add('close'); el.stopPropagation(); setTimeout(() => { setDeletePrevent(false) }, 200) }}>Нет</button>
            </div>
            <div className={`createLoadingWrapper ${loading ? 'show' : ''}`}>
                <Loading />
            </div>
        </div> : null}
        <div className="mainText">
            <p className="kurs">{props.programmInfo.course} курс</p>
            <p className="semestr">{props.programmInfo.sem} сем</p>
        </div>
        <div className="middleText">
            <p className="fac">{props.programmInfo.faculty}</p>
            <p className="group">{props.programmInfo.group}</p>
        </div>
        <div className="botText">
            <p className="num">{props.programmInfo.labsCount}</p>
            <p>лабораторных работ</p>
        </div>
    </div>
}
export default ProgrammTile