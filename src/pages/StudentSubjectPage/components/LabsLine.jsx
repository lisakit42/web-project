import LabDatePin from "./LabDatePin"
import "./LabsLine.scss"

const Labs = [{ deadline: '01.09.2023', status: '1' }, 
              { deadline: '07.09.2023', status: '1' }, 
              { deadline: '21.09.2023', status: '2' }, 
              { deadline: '05.10.2023', status: '3' },
              { deadline: '19.10.2023', status: '1' },
              { deadline: '27.10.2023', status: '0' },
              { deadline: '06.11.2023', status: '' }].map(el => <LabDatePin deadline={el.deadline} status={el.status} />)

console.log(Labs)


const LabsLine = () => {
    return <div className="LineWrapper">
        {Labs}
    </div>
}

export default LabsLine