import { useState } from 'react'
import './TeacherProgrammsList.scss'
import ProgrammTile from './components/ProgrammTile/ProgrammTile'

const programms = [
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 15
    },
    {
        subject: 'Прикладная информатика',
        course: 2,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 3
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'БИ',
        labsCount: 10
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 15
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 15
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 15
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },

    {
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },

    {
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        subject: 'Базы данных',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 28
    },

]

const TilesContainer = (props) => {
    const [expand, setExpand] = useState(false);
    return <div className='subjectProgrammsWrapper' >
        <p>{props.subject}</p>
        <div className={'tilesWrapper ' + (props.tiles.length > 5 ? 'overflowed' : '')} style={expand ? {maxHeight: Math.ceil(props.tiles.length / 5) * 262 + 'px'}: {}}>
            {props.tiles}
            <div className='expandButton' onClick={() => {setExpand(!expand)}}>
                {expand ? 'Свернуть' : 'Развернуть' }
            </div>
        </div>
    </div>
}

const listBuild = (programms) => {
    const programmsList = []
    let tiles = []
    let tempSubj = ''
    programms.forEach((el, i) => {
        if (i === 0) {
            console.log('Первый прошел! ', i)
            tempSubj = el.subject;
            tiles.push(<ProgrammTile programmInfo={el} />)
        } else
            if (el.subject === tempSubj && i !== 0) {
                console.log(i)
                tiles.push(<ProgrammTile programmInfo={el} />)
            } else {
                console.log(i)
                programmsList.push(<TilesContainer subject={tempSubj} tiles={tiles} />)
                console.log(programmsList)
                tempSubj = el.subject;
                tiles = []
                tiles.push(<ProgrammTile programmInfo={el} />)
            }
    });
    programmsList.push(<TilesContainer subject={tempSubj} tiles={tiles} />)

    return programmsList;
}


const TeacherProgrammsList = () => {
    return <div className="programmsListWrapper">
        {listBuild(programms)}
    </div>
}

export default TeacherProgrammsList