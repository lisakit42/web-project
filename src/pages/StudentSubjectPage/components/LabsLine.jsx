import LabDatePin from "./LabDatePin"
import "./LabsLine.scss"


const LabsLine = (props) => {
    return <div className="LineWrapper">
        {props.labs.map((el, i) => <LabDatePin id={i} deadline={el.deadline} status={el.status} />)}
    </div>
}

export default LabsLine