import { useState } from "react"
import LabNameInput from "./components/LabNameInput"

const LabFilePicker = () => {
    const [drag, setDrag] = useState(false)
    const [filesList, setFilesList] = useState([])
    // const [deleteButtons, setDeletes] = useState([])
    const selectFn = (event) => {
        setFilesList(Array.from(event.target.files).map((el, i) => el = <p>{el.name}</p>))
        // setDeletes(filesList.map((el, i) => el = <span onClick={() => {deleteFile(i)}}>x</span>))
        drag && setDrag(false)
    }

    // в разработке
    //
    // const deleteFile = (i) => {
    //     console.log('deleted for i = ' + i)
    //     console.log(filesList)
    //     setFilesList(filesList.filter((el, index) => i !== index))
    // }
    return <div className='labFilePickerWrapper'>
        <h2>Файл:</h2>
        <label htmlFor='filePicker'>
            <span className={filesList.length ? "picked" : ""}>
                <p>{filesList.length ? '✔' : drag ? <h2>Отпустите</h2> : `Нажмите на кнопку\nили\nперетащите файл`}</p>
                <div className={`dragDiv ${drag ? "active" : ""}`}></div>
                <div className="fileWrapper">
                    {filesList}
                </div>
            </span>
        </label>
        <input onDragLeave={() => { setDrag(false) }} onDragEnter={() => { setDrag(true) }} onDrop={selectFn} type="file" onChange={selectFn} id='filePicker' />
    </div>
}

const AddLabModal = (props) => {
    let startDate, endDate, file;
    
    const close = () => {
        let wrap = document.querySelector('.addModalWrapper');
        wrap.classList.add('disappear');
        setTimeout(() => { props.setModalOpen(false) }, 180)
    }

    const filledCheck = (event) => {
        const name = event.target.offsetParent.children[2].children[0]

    }

    return <div className='addModalWrapper' id='addLabModal' >
        <span onClick={close} style={{ position: 'absolute', width: '100%', height: '100%' }}></span>
        <div className='addLabModal' >
            <span className='closeButton' onClick={close}>Закрыть</span>
            <h1>Добавить лабораторную работу №{props.count}</h1>
            <LabNameInput />
            <div className='dateInputs'>
                <div className="dateInputWrapper">
                    <label htmlFor="startDatePicker">Выберите дату начала:</label>
                    <br />
                    <input type="date" onLoad={(el) => console.log(el)} min='2000-01-01' onInput={el => console.log(el)} id='startDatePicker' className='startDatePicker' />
                </div>
                <div className="dateInputWrapper">
                    <label htmlFor="endDatePicker">Выберите дату дедлайна:</label>
                    <br />
                    <input type="date" min='2000-01-01' id='endDatePicker' className='startDatePicker' />
                </div>
            </div>
            <LabFilePicker />
            <button onClick={filledCheck} className="saveButton">Сохранить</button>
        </div>
    </div>
}

export default AddLabModal;