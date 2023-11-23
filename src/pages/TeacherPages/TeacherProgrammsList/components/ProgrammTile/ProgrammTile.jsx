import { useNavigate } from "react-router-dom"
import Logo from "./KubsauLogo.svg"
import deleteIcon from "./delete.svg"
import "./ProgrammTile.scss"
import { useState } from "react"


const ProgrammTile = (props) => {
    const navigate = useNavigate()
    const [deletePrevent, setDeletePrevent] = useState(false)
    const [deleted, setDeleted] = useState(false)
    let hoverDelete = false;

    return <div className={'TileWrapper ' + (deleted ? 'deleted' : '')} onClick={() => { if (!hoverDelete) navigate(`./programm-edit-page/${props.programmInfo.id}`) }} >
        <img className="backLogo" src={Logo} />
        <div className="deleteButton" onMouseOut={() => { hoverDelete = false }} onMouseOver={() => { hoverDelete = true }} onClick={() => { setDeletePrevent(true) }}><img src={deleteIcon} alt="" /></div>
        {deletePrevent ? <div className="TileWrapper deletePreventWindow" onMouseOut={() => { hoverDelete = false }} onMouseOver={() => { hoverDelete = true }}>
            <p>Удалить программу?</p>
            <div>
                <button className="accept" onClick={() => {props.gapInc(); setDeleted(true);}}>Да</button>
                <button onClick={(el) => { el.target.offsetParent.classList.add('close'); setTimeout(()=> {setDeletePrevent(false)}, 200) }}>Нет</button>
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