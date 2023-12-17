import axios from 'axios';
import './SubjectsTable.scss'
import { useEffect, useState } from 'react';

const SubjectsTable = () => {
    const [subjectsInfo, setSubjectsInfo] = useState([])
    axios.defaults.baseURL = 'http://web-project.somee.com/project/api';
    const tableGetApi = '/programm/student/subjects'

    const fetchTable = () => {
        axios.get(tableGetApi).then(res => { setSubjectsInfo(res.data) })
    }

    useEffect(fetchTable, [])

    return <div className="subjectTableWrapper">
        <table>
            <thead>
                <tr>
                    <th>Предмет</th>
                    <th>Преподаватель</th>
                </tr>
            </thead>
            <tbody>
                {subjectsInfo.map(el => <tr><td>{el.subject}</td><td>{el.teacher}</td></tr>)}
            </tbody>
        </table>
    </div>
}

export default SubjectsTable;