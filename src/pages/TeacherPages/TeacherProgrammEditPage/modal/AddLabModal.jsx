import { useState } from "react"
import LabNameInput from "./components/LabNameInput"
import axios from "axios"
import DateInput from "./components/DateInput"

const LabFilePicker = (props) => {
    const [drag, setDrag] = useState(false)
    const [filesList, setFilesList] = useState([])
    // const [deleteButtons, setDeletes] = useState([])
    const selectFn = (event) => {
        let formData = new FormData();
        formData.set('file', event.target.files[0])
        console.log(formData)
        setFilesList(Array.from(event.target.files).map((el, i) => el = <p>{el.name}</p>))
        props.labInfo.file = event.target.files[0];
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
            <span className={filesList.length ? "picked" : ""}>
                <p>{filesList.length ? '✔' : drag ? <h2>Отпустите</h2> : `Нажмите здесь\nили\nперетащите файл`}</p>
                <div className={`dragDiv ${drag ? "active" : ""}`}></div>
                <div className="fileWrapper">
                    {filesList}
                </div>
            </span>
        </label>
        <input onDragLeave={() => { setDrag(false) }} onDragEnter={() => { setDrag(true) }} onDrop={selectFn} type="file" name="file" onChange={selectFn} id='filePicker' />
    </form>
}

const labInfo = { name: '', beginDate: '', deadline: '', file: '' };

const AddLabModal = (props) => {

    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
    const postLabApi = '/lab'

    const close = (event) => {
        console.log(event)
        let wrap = document.querySelector('.addModalWrapper');
        wrap.classList.add('disappear');
        setTimeout(() => { props.setModalOpen(false) }, 180)
    }

    const filledCheck = (event) => {
        const name = event.target.offsetParent.children[2].children[0]
    }

    const postLab = (labInfo) => {
        console.log({ ...labInfo, deadline: '2023-11-18T00:00:00', programmId: 1 })
        const json = { name: labInfo.name, beginDate: '2023-11-17T00:00:00', deadline: '2023-11-18T00:00:00', programmId: 1 }
        const formData = new FormData();
        formData.append('Json', JSON.stringify(json))
        formData.append('File', labInfo.file)
        axios.post(postLabApi, formData).then(res => console.log(res)).catch(err => console.log(err))
    }

    return <div className='addModalWrapper' id='addLabModal' >
        <span onClick={close} style={{ position: 'absolute', width: '100%', height: '100%' }}></span>
        <div className='addLabModal' >
            <span className='closeButton' onClick={close}>Закрыть</span>
            <h1>Добавить лабораторную работу №{props.count + 1}</h1>
            <LabNameInput labInfo={labInfo} />
            <div className='dateInputsWrapper'>
                <DateInput type='start' />
                <DateInput type='end' />
            </div>
            <LabFilePicker labInfo={labInfo} />
            <button onClick={() => { postLab(labInfo) }} className="saveButton">Сохранить</button>
        </div>
    </div>
}

export default AddLabModal;