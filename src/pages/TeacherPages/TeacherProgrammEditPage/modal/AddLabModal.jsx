import { useState } from "react"
import LabNameInput from "./components/LabNameInput"
import axios from "axios"
import ReactDatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ru from "date-fns/locale/ru"

const LabFilePicker = (props) => {
    const [drag, setDrag] = useState(false)
    const [filesList, setFilesList] = useState([])
    // const [deleteButtons, setDeletes] = useState([])
    const selectFn = (event) => {
        setFilesList(Array.from(event.target.files).map((el, i) => el = <p>{el.name}</p>))
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

const AddLabModal = (props) => {
    const [beginDate, setBeginDate] = useState(new Date())
    const [deadline, setDeadline] = useState(new Date())
    const [file, setFile] = useState()
    const [name, setName] = useState()

    registerLocale('ru', ru)

    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
    const postLabApi = `/lab/${props.programmId}`

    const close = (event) => {
        console.log(event)
        let wrap = document.querySelector('.addModalWrapper');
        wrap.classList.add('disappear');
        setTimeout(() => { props.setModalOpen(false) }, 180)
    }
    const filledCheck = () => {
        return !!(name && file && beginDate && deadline)
    }

    const postLab = () => {
        if (filledCheck()) {
            
            const json = { name: name, beginDate: beginDate, deadline: deadline, programmId: props.programmId }
            const formData = new FormData();
            formData.append('Json', JSON.stringify(json))
            formData.append('File', file)
            axios.post(postLabApi, formData).then(res => {props.addLab({name: json.name, beginDate: json.beginDate, deadline: json.deadline, link: res.data}); close()}).catch(err => console.log(err))
        }
        else {alert('Заполните все поля')}
    }
    console.log(props.labs)
    return <div className='addModalWrapper' id='addLabModal' >
        <span onClick={close} style={{ position: 'absolute', width: '100%', height: '100%' }}></span>
        <div className='addLabModal' >
            <span className='closeButton' onClick={close}>Закрыть</span>
            <h1>Добавить лабораторную работу №{props.count + 1}</h1>
            <LabNameInput setName={setName} name={name} />
            <div className='dateInputsWrapper'>
                <div className="beginDatePicker">
                    <p>Дата начала:</p>
                    <ReactDatePicker dateFormat='dd.MM.yyyy' locale='ru' showIcon selected={beginDate} onChange={date => { setBeginDate(date) }} />
                </div>
                <div className="beginDatePicker">
                    <p>Дата окончания:</p>
                    <ReactDatePicker dateFormat='dd.MM.yyyy' locale='ru' showIcon selected={deadline} onChange={date => { setDeadline(date) }} />
                </div>
            </div>
            <LabFilePicker setFile={setFile} file={file} />
            <button onClick={() => { postLab() }} className="saveButton">Сохранить</button>
        </div>
    </div>
}

export default AddLabModal;