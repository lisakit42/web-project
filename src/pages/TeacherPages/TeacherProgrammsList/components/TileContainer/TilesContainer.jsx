import { useState } from "react";
import ProgrammTile from "../ProgrammTile/ProgrammTile";
import CreateProgrammTile from "../CreateProgrammTile/CreateProgrammTile";
import './TilesContainer.scss'



const TilesContainer = (props) => {
    const [expand, setExpand] = useState(false);
    const [gap, setGap] = useState(0)
    const gapInc = () => {
        setGap(gap + 1)
    }

    const [tiles, setTiles] = useState(props.tiles.map((el) => <ProgrammTile fetchProgramms={() => {props.fetchProgramms()}} tileIndex={el.props.tileIndex} programmInfo={el.props.programmInfo} gapInc={gapInc}/>))

    const addTile = (info) => {
        const temp = [...tiles]
        temp.push(<ProgrammTile fetchProgramms={() => {props.fetchProgramms()}} tileIndex={temp.length} programmInfo={
            {
                Id: info.Id,
                subject: props.subject,
                course: info.sem.split(' ')[0],
                sem: info.sem.split(' ')[2],
                faculty: info.faculty,
                group: info.group,
                labsCount: 0
            }} gapInc={gapInc}/>)
        setTiles(temp)
    }

    if (tiles.length === 0 || tiles[tiles.length - 1].type.name !== (<CreateProgrammTile />).type.name) setTiles([...tiles, <CreateProgrammTile subject={props.subject} tiles={tiles} addTile={addTile} />])

    return <div className='subjectProgrammsWrapper' >
        <p>{props.subject}</p>
        <div className={'tilesWrapper ' + (tiles.length - gap > 5 ? 'overflowed' : '')} style={expand ? { maxHeight: Math.ceil((tiles.length - gap) / 5) * 262 + 'px' } : {}}>
            {tiles}
            <div className='expandButton' onClick={() => { setExpand(!expand) }}>
                {expand ? 'Свернуть' : 'Развернуть'}
            </div>
        </div>
    </div>
}

export default TilesContainer