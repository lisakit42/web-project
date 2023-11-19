const LabTableRow = (props) => {
    return <tr>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.startDate}</td>
        <td>{props.deadline}</td>
    </tr>
}

export default LabTableRow;