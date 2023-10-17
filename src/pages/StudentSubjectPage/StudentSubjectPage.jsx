import BigLogo from "./svg/BigLogo.svg"
import "./Authorization.scss"
import WhoAuthToggle from "./components/whoAuthToggle"

const Authorization = () => {
    return <form>
        <div className="Authorization">
        <img src={BigLogo} alt="" className="Logo" />
        <WhoAuthToggle />
        <div className="inputs">
            <input type="text"  placeholder="Логин" data-validate name="loginField" id="loginField" className="AuthField" />
            <input type="password" placeholder="Пароль" name="PasswordField" id="PasswordField" className="AuthField" />
            <button type="submit" className="AuthButton" onClick={() => {console.log() }}>Авторизоваться</button>
        </div>
    </div>
    </form>
}

export default Authorization