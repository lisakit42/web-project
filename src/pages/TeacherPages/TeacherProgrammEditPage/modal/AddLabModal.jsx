import { useState } from "react"
import LabNameInput from "./components/LabNameInput"
import axios from "axios"
import ReactDatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ru from "date-fns/locale/ru"
import LabFilePicker from "./components/FilePicker"
import Loading from "../../../../components/Loading/Loading"

const AddLabModal = (props) => {
    const [beginDate, setBeginDate] = useState(new Date())
    const [deadline, setDeadline] = useState(new Date())
    const [file, setFile] = useState()
    const [name, setName] = useState()
    const [loading, setLoading] = useState(false);

    registerLocale('ru', ru)

    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
    const postLabApi = `/lab/${props.programmId}`

    const close = () => {
        const wrap = document.querySelector('.addModalWrapper');
        wrap.classList.add('disappear');
        setLoading(false)
        setTimeout(() => { props.setModalOpen(false) }, 180)
    }
    
    const filledCheck = () => {
        return !!(name && file && beginDate && deadline)
    }

    const postLab = () => {
        
        if (filledCheck()) {
            setLoading(true)
            const json = { name: name, beginDate: beginDate, deadline: deadline, programmId: props.programmId }
            const formData = new FormData();
            formData.append('Json', JSON.stringify(json))
            formData.append('File', file)
            axios.post(postLabApi, formData).then(res => { document.querySelector('.loadingWrapper').classList.add('success'); props.addLab({ name: res.data.name, beginDate: res.data.beginDate, deadline: res.data.deadline, link: res.data.link, id: res.data.id }); setTimeout(close, 1500) }).catch(err => console.log(err))
        } else {
            alert('Заполните все поля')
        }
    }
    console.log(props.labs)
    return <div className='addModalWrapper' id='addLabModal' >
        <span onClick={close} style={{ position: 'absolute', width: '100%', height: '100%' }}></span>
        <div className='addLabModal' >
            <div className={`postLoading ${loading ? 'active' : ''}`}>
                <Loading fill="#6ab778" />
            </div>
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