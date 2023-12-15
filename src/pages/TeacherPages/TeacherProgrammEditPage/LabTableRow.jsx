import axios from 'axios';
import downloadSvg from './svg/download.svg'

const LabTableRow = (props) => {
    const beginDate = new Date(props.startDate);
    const deadLine = new Date(props.deadline);
    axios.defaults.baseURL = 'http://web-project.somee.com/project/api';
    const deleteLabApi = `/lab/${props.id}`;

    const deleteLab = async () => {
        await axios.delete(deleteLabApi).then(() => {
            document.querySelector('.deleteAnimWrapper').classList.toggle('show');
            setTimeout(() => {
                props.deleteLab(props.id);
                document.querySelector('.deleteAnimWrapper').classList.toggle('show')
            }, 2000)
        }).catch((err) => { console.log(err) })
    }

    return <tr>
        <td>{props.number}</td>
        <td>{props.title}</td>
        <td>{`${beginDate.getDate() < 10 ? `0${beginDate.getDate()}` : beginDate.getDate()}.${beginDate.getMonth() + 1 < 10 ? `0${beginDate.getMonth() + 1}` : beginDate.getMonth() + 1}.${beginDate.getFullYear()}`}</td>
        <td>{`${deadLine.getDate() < 10 ? `0${deadLine.getDate()}` : deadLine.getDate()}.${deadLine.getMonth() + 1 < 10 ? `0${deadLine.getMonth() + 1}` : deadLine.getMonth() + 1}.${deadLine.getFullYear()}`}</td>
        <td>
            <div className='deleteAnimWrapper'>
                <div className='deleteAnim'> </div>
            </div>
            <div onClick={deleteLab} className='labActions'>
                делит
            </div>
        </td>
        <td></td>
    </tr>
}

export default LabTableRow;