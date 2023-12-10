import { useState } from "react"

const LabFilePicker = (props) => {
    const [drag, setDrag] = useState(false)
    // const [deleteButtons, setDeletes] = useState([])
    const selectFn = (event) => {
        props.setFile(event.target.files[0])
        // setDeletes(filesList.map((el, i) => el = <span onClick={() => {deleteFile(i)}}>x</span>))
        drag && setDrag(false)
    }

    // в разработке (планировался список выбранных файлов с возможностью его редактирования)
    //
    // const deleteFile = (i) => {
    //     console.log('deleted for i = ' + i)
    //     console.log(filesList)
    //     setFilesList(filesList.filter((el, index) => i !== index))
    // }
    return <form className='labFilePickerWrapper'>
        <h2>Файл:</h2>
        <label htmlFor='filePicker'>
            <span className={props.file ? "picked" : ""}>
                <p>{props.file ? '✔' : drag ? <h2>Отпустите</h2> : `Нажмите здесь\nили\nперетащите файл`}</p>
                <div className={`dragDiv ${drag ? "active" : ""}`}></div>
                <div className="fileWrapper">
                    {props.file ? [<p>{props.file.name}</p>] : ''}
                </div>
            </span>
        </label>
        <input onDragLeave={() => { setDrag(false) }} onDragEnter={() => { setDrag(true) }} onDrop={selectFn} type="file" name="file" onChange={selectFn} id='filePicker' />
    </form>
}

export default LabFilePicker