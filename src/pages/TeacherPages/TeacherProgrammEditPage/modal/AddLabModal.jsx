import { useState } from "react"
import LabNameInput from "./components/LabNameInput"
import axios from "axios"
import ReactDatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ru from "date-fns/locale/ru"
import LabFilePicker from "./components/FilePicker"
import Loading from "../../../../components/Loading/Loading"

const AddLabModal = (props) => {
    const [beginDate, setBeginDate] = useState(props.isEdit ? new Date(props.labInfo.beginDate) : new Date())
    const [deadline, setDeadline] = useState(props.isEdit ? new Date(props.labInfo.deadline) : new Date())
    const [file, setFile] = useState()
    const [name, setName] = useState(props.isEdit ? props.labInfo.title : null)
    const [loading, setLoading] = useState(false);
    const datesDiff = new Date(deadline - beginDate)
    let datesDiffInfo = ''
    registerLocale('ru', ru)
    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
    const postLabApi = `/lab/${props.programmId}`

    const close = () => {
        if (!loading) {
            const wrap = document.querySelector('.addModalWrapper');
            wrap.classList.add('disappear');
            setTimeout(() => { if (props.isEdit) props.closeEdit(); else props.setModalOpen(false) }, 180)
        }
    }

    const filledCheck = () => {
        return !!(name && file && beginDate && deadline)
    }

    const postLab = () => {
        if (filledCheck()) {
            setLoading(true)
            const json = {
                name: name,
                beginDate: beginDate,
                deadline: deadline,
                programmId: props.programmId
            }
            const formData = new FormData();
            formData.append('Json', JSON.stringify(json))
            formData.append('File', file)
            axios.post(postLabApi, formData).then(res => {
                document.querySelector('.loadingWrapper').classList.add('success');
                props.addLab({
                    name: res.data.name,
                    beginDate: res.data.beginDate,
                    deadline: res.data.deadline,
                    link: res.data.link, id: res.data.id
                }); setTimeout(() => { if (props.isEdit) props.closeEdit(); else setLoading(false); close() }, 1200)
            }).catch(err => console.log(err))
        } else {
            alert('Заполните все поля')
        }
    }

    datesDiffInfo += Math.floor(datesDiff / 86400000 / 7)

    switch (Math.floor(datesDiff / 86400000 / 7)) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
            datesDiffInfo += ' неделя '
            break;
        case 2:
        case 22:
        case 32:
        case 42:
        case 52:
        case 3:
        case 23:
        case 33:
        case 43:
        case 53:
        case 4:
        case 24:
        case 34:
        case 44:
        case 54:
            datesDiffInfo += ' недели '
            break;
        default:
            datesDiffInfo += ' недель '
            break;
    }

    datesDiffInfo += Math.ceil(datesDiff / 86400000 % 7);

    switch (Math.ceil(datesDiff / 86400000 % 7)) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
            datesDiffInfo += ' день'
            break;
        case 2:
        case 22:
        case 32:
        case 42:
        case 52:
        case 3:
        case 23:
        case 33:
        case 43:
        case 53:
        case 4:
        case 24:
        case 34:
        case 44:
        case 54:
            datesDiffInfo += ' дня'
            break;
        default:
            datesDiffInfo += ' дней'
            break;
    }
    return <div className='addModalWrapper' id='addLabModal' >
        <span onClick={close} style={{ position: 'absolute', width: '100%', height: '100%' }}></span>
        <div className='addLabModal' >
            <div className={`postLoading ${loading ? 'active' : ''}`}>
                <Loading fill="#6ab778" />
            </div>
            <span className='closeButton' onClick={close}>Закрыть</span>
            {props.isEdit ? <h1>Редактирование лабораторной работы №{props.labInfo.number}</h1> : <h1>Добавить лабораторную работу №{props.count + 1}</h1>}
            <LabNameInput setName={setName} name={name} />
            <div className='dateInputsWrapper'>
                <div className="beginDatePicker">
                    <p>Дата начала:</p>
                    <ReactDatePicker
                        dateFormat='dd.MM.yyyy'
                        locale='ru'
                        onChange={date => { setBeginDate(date) }}
                        selected={beginDate}
                        showIcon
                        startDate={beginDate}
                        endDate={deadline}
                    />
                </div>
                <div className="beginDatePicker">
                    <p>Дата окончания:</p>
                    <ReactDatePicker
                        dateFormat='dd.MM.yyyy'
                        locale='ru'
                        showIcon
                        selected={deadline}
                        onChange={date => { setDeadline(date) }}
                        startDate={beginDate}
                        endDate={deadline}
                        minDate={beginDate}
                    />
                </div>
            </div>
            <h2>{datesDiffInfo}</h2>

            <LabFilePicker setFile={setFile} file={file} />
            <button onClick={() => { postLab() }} className="saveButton">Сохранить</button>
        </div>
    </div>
}

export default AddLabModal;