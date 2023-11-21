import { useNavigate } from "react-router-dom"
import Logo from "./KubsauLogo.svg"
import "./ProgrammTile.scss"


const ProgrammTile = (props) => {
    const navigate = useNavigate()

    return <div onClick={() => { navigate(`./programm-edit-page/${props.programmInfo.id}`) }} className="TileWrapper">
        <img className="backLogo" src={Logo} />
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