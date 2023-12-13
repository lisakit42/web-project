import BigLogo from "./svg/BigLogo.svg"
import "./Authorization.scss"
import WhoAuthToggle from "./components/whoAuthToggle"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import DeadLineTimer from "./components/deadlineTimer"
import Loading from "../../components/Loading/Loading"
import viewSvg from "./svg/view.svg"
import noViewSvg from "./svg/no-view.svg"

let login = "admin", password = "admin"
const authApi = '/users/'



const isLogged = () => JSON.parse(localStorage.getItem('user'))

const Authorization = (props) => {
    const [student, setStudent] = useState(localStorage.getItem('lastType') ? JSON.parse(localStorage.getItem('lastType')) : true)
    const [inputFill, setFill] = useState({ loginFill: true, passwordFill: true })
    const [accData, setAccData] = useState({ login: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)
    const [successLogin, setSuccess] = useState(true)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'

    const fillCheck = (setFill) => setFill({ loginFill: !!accData.login, passwordFill: !!accData.password })

    useEffect(() => { if (isLogged()) navigate('/main') }, [])

    const Auth = async () => {
        fillCheck((el) => { setFill(el) });
        if (accData.login && accData.password) {
            setLoading(true)
            console.log(`${authApi + accData.login}@${accData.password}`)
            await axios.get(`${authApi + accData.login}@${accData.password}`).then(res => {
                if (res.data && !!res.data.Type === student) {
                    localStorage.setItem('user', JSON.stringify(res.data))
                    localStorage.setItem('lastType', JSON.stringify(student))
                    navigate('/main')
                } else {
                    setSuccess(false);
                    setLoading(false);
                }
            }).catch(err => {
                console.log(err);
                setSuccess(false);
                setLoading(false);
            })

        }
    }

    const setView = (target) => {
        target.currentTarget.offsetParent.children[0].type = 'text'
        setShowPassword(true)
    }

    const setNoView = (target) => {
        target.currentTarget.offsetParent.children[0].type = 'password'
        setShowPassword(false)
    }

    return <form onLoad={() => { login = ''; password = '' }} onSubmit={event => event.preventDefault()}>
        <div className="Authorization">
            <img src={BigLogo} alt="" className="Logo" />
            <WhoAuthToggle student={student} setStudent={() => { setStudent(!student) }} />
            {loading ? <Loading height='209' /> : <div className="inputs">
                <div className={`incorrectData ${!successLogin ? 'show' : ''}`}>Некорректные данные</div>
                <div className="loginInputDiv">
                    <input value={accData.login} type="text" placeholder="Логин" data-validate name="loginField" id="loginField" className="AuthField" onKeyUp={el => { if (el.key === 'Enter') Auth() }} onInput={ev => { setAccData({ ...accData, login: ev.target.value }); if (!inputFill.loginFill) setFill({ ...inputFill, loginFill: true }); if (!successLogin) setSuccess(true) }} />
                    <span className={`noFillSpan ${inputFill.loginFill ? '' : 'show'}`}>Поле обязательно к заполнению*</span>
                </div>
                <div className={`passwordInputDiv ${!inputFill.loginFill ? 'show' : ''}`}>
                    <input value={accData.password} type="password" placeholder="Пароль" name="passwordField" id="passwordField" className="AuthField" onKeyUp={el => { if (el.key === 'Enter') Auth() }} onInput={ev => { setAccData({ ...accData, password: ev.target.value }); if (!inputFill.passwordFill) setFill({ ...inputFill, passwordFill: true }); if (!successLogin) setSuccess(true) }} />
                    <div onMouseDown={setView} onMouseOut={setNoView} onMouseUp={setNoView} className="passwordControl"><img src={showPassword ? viewSvg : noViewSvg} draggable="false" alt="" /></div>
                    <span className={`noFillSpan ${inputFill.passwordFill ? '' : 'show'}`}>Поле обязательно к заполнению*</span>
                </div>
                <button type="submit" className={`AuthButton ${!inputFill.passwordFill ? 'show' : ''}`}
                    onClick={() => Auth()}>Авторизоваться</button>
            </div>}

            <DeadLineTimer />
        </div>
    </form>
}

export default Authorization