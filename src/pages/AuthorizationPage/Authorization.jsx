import BigLogo from "./svg/BigLogo.svg"
import "./Authorization.scss"
import WhoAuthToggle from "./components/whoAuthToggle"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const StudentsList = [{login: "AbkarovSH",fio: "Абкаров Шамил", password: "1234", student: true},
                      {login: "BobylevaE", fio: "Бобылева Елизавета", password: "1234", student: true}]

const TeachersList = [{login: "Pavlov", fio: "Мистер Матанал", password: "1234", student: false}]

let login = "", password = ""

const accExist = (student) => {
    if (student) return StudentsList.filter(el => el.login === login && el.password === password)[0]
    else return TeachersList.filter(el => el.login === login && el.password === password)[0]
}

const fillCheck = (setFill) => setFill({loginFill: !!login, passwordFill: !!password})

const isLogged = () => JSON.parse(localStorage.getItem('user'))

const Authorization = (props) => {
    const [student, setStudent] = useState(false)
    const [inputFill, setFill] = useState({loginFill: true, passwordFill: true})
    const [successLogin, setSuccess] = useState(true)

    const navigate = useNavigate();
    useEffect(() => {if (isLogged()) navigate('/main')},[])
    let user = {};

    const Auth = () => {
        fillCheck((el) => { setFill(el) });
        if (login && password) {
            user = accExist(student)
            if (user) {
                localStorage.setItem('user', JSON.stringify(user))
                navigate('/main')
            } else {
                setSuccess(false);
            }
        }
    }

    return <form onLoad={() => {login = ''; password = ''}} onSubmit={event => event.preventDefault()}>
        <div className="Authorization">
            <img src={BigLogo} alt="" className="Logo" />
            <WhoAuthToggle student={student} setStudent={() => {setStudent(!student)}}/>
            <div className="inputs">
            <div className={`incorrectData ${!successLogin ? 'show' : ''}`}>Некорректные данные</div>
                <div className="loginInputDiv">
                    <input type="text" placeholder="Логин" data-validate name="loginField" id="loginField" className="AuthField" onKeyUp={el => {if (el.key === 'Enter') Auth()}} onInput={ev => { login = ev.target.value; if (!inputFill.loginFill) setFill({...inputFill, loginFill: true}); if (!successLogin) setSuccess(true) }} />
                    <span className={`noFillSpan ${inputFill.loginFill ? '' : 'show'}`}>Поле обязательно к заполнению*</span>
                </div>
                <div className={`passwordInputDiv ${!inputFill.loginFill ? 'show' : ''}`}>
                    <input type="password" placeholder="Пароль" name="PasswordField" id="PasswordField" className="AuthField" onKeyUp={el => {if (el.key === 'Enter') Auth()}} onInput={ev => { password = ev.target.value; if (!inputFill.passwordFill) setFill({...inputFill, passwordFill: true}); if (!successLogin) setSuccess(true) }} />
                    <span className={`noFillSpan ${inputFill.passwordFill ? '' : 'show'}`}>Поле обязательно к заполнению*</span>
                </div>
                <button type="submit" className={`AuthButton ${!inputFill.passwordFill ? 'show' : ''}`}
                    onClick={() => Auth()}>Авторизоваться</button>
            </div>
        </div>
    </form>
}

export default Authorization