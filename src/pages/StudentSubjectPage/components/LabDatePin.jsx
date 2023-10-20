import "./LabsLine.scss"

// status:
//  0 - все еще сдается
//  1 - сдал
//  2 - не сдал
//  3 - сдал не вовремя


const LabDatePin = (props) => {
    return <div className={`PinWrapper ${props.status === '1' ? 'passed' : props.status === '2' ? 'npassed' : props.status === '3' ? 'lpassed' : props.status === '0' ? 'actual' : ''}`}>
        <p className="deadline">{props.deadline}</p>
        <span className="circle" />
        <span className="stick" />
    </div>
}

export default LabDatePin