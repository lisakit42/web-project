import Logo from "./KubsauLogo.svg"
import "./ProgrammTile.scss"


const ProgrammTile = () => {
    return <div className="TileWrapper">    
        {/* <img src={Logo} /> */}
        <p className="maintext">1 курс</p>
        <p style={{fontSize: "30px"}}>1 сем</p>
        <p class="fac">ФПИ</p>
        <p class="group">ИТ</p>
        <p class="num">15</p>
        <p>лабораторных работ</p>
    </div>
}
export default ProgrammTile