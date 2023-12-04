const LabTableRow = (props) => {
    const beginDate = new Date(props.startDate);
    const deadLine = new Date(props.deadline)
    return <tr>
        <td>{props.number}</td>
        <td>{props.title}</td>
        <td>{`${beginDate.getDate() < 10 ? `0${beginDate.getDate()}` : beginDate.getDate()}.${beginDate.getMonth() + 1 < 10 ? `0${beginDate.getMonth() + 1}` : beginDate.getMonth() + 1}.${beginDate.getFullYear()}`}</td>
        <td>{`${deadLine.getDate() < 10 ? `0${deadLine.getDate()}` : deadLine.getDate()}.${deadLine.getMonth() + 1 < 10 ? `0${deadLine.getMonth() + 1}` : deadLine.getMonth() + 1}.${deadLine.getFullYear()}`}</td>
    </tr>
}

export default LabTableRow;