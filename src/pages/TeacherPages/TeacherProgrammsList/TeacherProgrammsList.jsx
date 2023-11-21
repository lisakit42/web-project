import { useState } from 'react'
import './TeacherProgrammsList.scss'
import ProgrammTile from './components/ProgrammTile/ProgrammTile'
import CreateProgrammTile from './components/CreateProgrammTile/CreateProgrammTile';
import { useEffect } from "react";
const temp1 = []
const TilesContainer = (props) => {
    const [expand, setExpand] = useState(false);
    const [tiles, setTiles] = useState(props.tiles)
    console.log('cen')
    console.log(tiles)

    const addTile = (info) => {
        const temp = [...tiles]

        temp.push(<ProgrammTile programmInfo={{ id: 31, subject: props.subject, course: info.sem.split(' ')[0], sem: info.sem.split(' ')[2], faculty: info.faculty, group: info.group, labsCount: 0 }} />)
        setTiles(temp)
    }
    if (tiles[tiles.length - 1].type.name !== 'CreateProgrammTile') setTiles([...tiles, <CreateProgrammTile addTile={(info) => { addTile(info) }} />])

    return <div className='subjectProgrammsWrapper' >
        <p>{props.subject}</p>
        <div className={'tilesWrapper ' + (props.tiles.length > 5 ? 'overflowed' : '')} style={expand ? { maxHeight: Math.ceil(props.tiles.length / 5) * 258 + 'px' } : {}}>
            {tiles}
            <div className='expandButton' onClick={() => { setExpand(!expand) }}>
                {expand ? 'Свернуть' : 'Развернуть'}
            </div>
        </div>
    </div>
}

const listBuild = (programms) => {
    const programmsList = []
    let tiles = []
    let tempSubj = ''
    let num = 0;
    programms.forEach((el, i) => {
        if (i === 0) {
            tempSubj = el.subject;
            tiles.push(<ProgrammTile programmInfo={el} />)
        } else
            if (el.subject === tempSubj && i !== 0) {
                tiles.push(<ProgrammTile programmInfo={el} />)
            } else {
                programmsList.push(<TilesContainer subject={tempSubj} tiles={tiles} />)
                tempSubj = el.subject;
                tiles = []
                tiles.push(<ProgrammTile programmInfo={el} />)
            }
    });
    programmsList.push(<TilesContainer subject={tempSubj} tiles={tiles} />)

    return programmsList;
}


const TeacherProgrammsList = (props) => {
    const [programmsList, setProgrammsList] = useState([])
    useEffect(() => { setProgrammsList(listBuild(props.programms)) }, [])

    return <div className="programmsListWrapper">
        {programmsList}
    </div>
}

export default TeacherProgrammsList