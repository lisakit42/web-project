import LabDatePin from "./LabDatePin"
import "./LabsLine.scss"



const LabsLine = (props) => {
    return <div className="LineWrapper">
        {props.labs.map((el, i) => props.labs.length - i < 7 ? <LabDatePin id={i} deadline={el.deadline} status={new Date(el.deadline) < new Date() ? '' : '0'} /> : '')}
    </div>
}

export default LabsLine