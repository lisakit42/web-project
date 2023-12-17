import { useState } from "react"
import "./LabsLine.scss"

// status:
//  0 - все еще сдается
//  1 - сдал
//  2 - не сдал
//  3 - сдал не вовремя


const LabDatePin = (props) => {
    const [show, setShow] = useState(false)
    const date = new Date(props.deadline)
    setTimeout(() => { setShow(true) }, props.id * 100 )
    return <div onClick={
        () => {
            let el = document.getElementById(`${props.id}`)
            console.log(props.id)
            el.scrollIntoView({ block: "center", behavior: "smooth" })
            el.classList.add("active")
            setTimeout(() => { el.classList.remove("active") }, 1000)
        }
    } className={`PinWrapper ${show ? 'show' : ''} ${props.status === '1' ? 'passed' : props.status === '2' ? 'npassed' : props.status === '3' ? 'lpassed' : props.status === '0' ? 'actual' : ''}`}>
        <p className="deadline">{`${date.getDate() > 9 ? date.getDate() : '0' + date.getDate() }.${date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + date.getMonth() + 1 }.${date.getFullYear()}`}</p>
        <span className="circle" />
        <span className="stick" />
    </div>
}

export default LabDatePin