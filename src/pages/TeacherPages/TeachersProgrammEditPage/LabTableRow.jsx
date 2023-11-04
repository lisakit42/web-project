import uploadSvg from './svg/uploadFile.svg'

const LabTableRow = (props) => {
    return <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.startDate}</td>
        <td>{props.deadline}</td>
        <td className='fileTD'>
            <input type='file' id='filePicker' className='filePicker' />
            <label for='filePicker'><span><img src={uploadSvg} alt='' /></span></label>
        </td>
    </tr>
}

export default LabTableRow;