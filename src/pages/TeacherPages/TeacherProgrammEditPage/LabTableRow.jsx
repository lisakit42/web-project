import axios from 'axios';
import ActionSelector from './components/ActionSelector';

const LabTableRow = (props) => {
    const beginDate = new Date(props.startDate);
    const deadLine = new Date(props.deadline);
    axios.defaults.baseURL = 'http://web-project.somee.com/project/api';
    const deleteLabApi = `/lab/${props.id}`;

    const deleteLab = async () => {
        const deleteWrapClasses = document.getElementById(`deleteAnimWrapper_${props.number}`).classList
        deleteWrapClasses.add('show');
        const actionSelector = document.getElementById(`actionSelector_${props.number}`).classList
        actionSelector.add('close')
        setTimeout(() => {
            actionSelector.remove('close')
            actionSelector.remove('show')
        }, 200)

        await axios.delete(deleteLabApi).then(() => {
            deleteWrapClasses.add('end')
            setTimeout(() => {
                props.deleteLab(props.id); 
                deleteWrapClasses.remove('end');
                deleteWrapClasses.remove('show');
            }, 200)
        }).catch((err) => { console.log(err) })
    }

    return <tr>
        <td>{props.number}</td>
        <td>{props.title}</td>
        <td>{`${beginDate.getDate() < 10 ? `0${beginDate.getDate()}` : beginDate.getDate()}.${beginDate.getMonth() + 1 < 10 ? `0${beginDate.getMonth() + 1}` : beginDate.getMonth() + 1}.${beginDate.getFullYear()}`}</td>
        <td>{`${deadLine.getDate() < 10 ? `0${deadLine.getDate()}` : deadLine.getDate()}.${deadLine.getMonth() + 1 < 10 ? `0${deadLine.getMonth() + 1}` : deadLine.getMonth() + 1}.${deadLine.getFullYear()}`}</td>
        <td>
            <div id={`deleteAnimWrapper_${props.number}`} className='deleteAnimWrapper'>
                <div className='deleteAnim'></div>
            </div>
        </td>
        <ActionSelector id={props.number} deleteLab={deleteLab} link={props.link} />
    </tr>
}

export default LabTableRow;