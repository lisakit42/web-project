import { useNavigate } from "react-router-dom";

const AccActions = (props) => {
    const navigate = useNavigate()
    let buttonHover = false;
    return <div className={`accActionsWrapper`} tabIndex='0' onBlur={el => {
        if (!buttonHover) {
            el.target.classList.add('close')
            setTimeout(() => { el.target.classList.remove('show'); el.target.classList.remove('close') }, 200)
        }

    }} >
        <button onMouseOver={() => {buttonHover = true}} onMouseOut={() => {buttonHover = false}} onClick={() => { localStorage.removeItem('user'); navigate('/') }}>Logout</button>
    </div>
}

export default AccActions