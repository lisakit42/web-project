import BigLogo from "./svg/BigLogo.svg"
import "./Authorization.scss"
import WhoAuthToggle from "./whoAuthToggle"

const Authorization = () => {
    return <div className="Authorization">
        <img src={BigLogo} alt="" className="Logo" />
        <WhoAuthToggle />
        <div className="inputs">
            <input type="text"  placeholder="Логин"  name="loginField" id="loginField" className="AuthField" />
            <input type="password" placeholder="Пароль" name="PasswordField" id="PasswordField" className="AuthField" />
            <div className="AuthButton" onClick={() => {/*some actions*/ }}>Авторизоваться</div>
        </div>
    </div>
}

export default Authorization