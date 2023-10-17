import LabPin from "./LabPin"
import "./LabsLine.scss"

const Labs = [{deadline: '01.09.2023', status: 'complete'}]

const LabsLine = () => {
    return <div>
        <LabPin />
    </div>
}

export default LabsLine