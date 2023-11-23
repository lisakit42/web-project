import { useState, useEffect } from 'react'
import './TeacherProgrammsList.scss'
import ProgrammTile from './components/ProgrammTile/ProgrammTile'
import TilesContainer from './components/TileContainer/TilesContainer';

const listBuild = (programms) => {
    const programmsList = []
    let tiles = []
    let tempSubj = ''
    programms.forEach((el, i) => {
        if (i === 0) {
            tempSubj = el.subject;
            tiles.push(<ProgrammTile tileIndex={tiles.length} programmInfo={el} />)
        } else
            if (el.subject === tempSubj && i !== 0) {
                tiles.push(<ProgrammTile tileIndex={tiles.length} programmInfo={el} />)
            } else {
                programmsList.push(<TilesContainer subject={tempSubj} tiles={tiles} />)
                tempSubj = el.subject;
                tiles = []
                tiles.push(<ProgrammTile tileIndex={tiles.length} programmInfo={el} />)
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