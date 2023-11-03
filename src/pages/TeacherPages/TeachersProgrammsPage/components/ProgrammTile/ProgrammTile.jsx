import Logo from "./KubsauLogo.svg"
import "./ProgrammTile.scss"


const ProgrammTile = () => {
    return <div className="TileWrapper">   
        <div className="mainText">
            <p className="kurs">1 курс</p>
            <p className="semestr">1 сем</p>
        </div>
        <div className="middleText">
            <p className="fac">ФПИ</p>
            <p className="group">ИТ</p>
        </div>
        <div className="botText">
            <p className="num">15</p>
            <p>лабораторных работ</p>
        </div>
        <div className="backLogo">
            <img src={Logo} />
        </div>
    </div>
}
export default ProgrammTile