import { useEffect, useState } from "react"
import ReactDatePicker from "react-datepicker"

const DateInput = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const pickerClick = () => {
        let picker
        if (props.type === 'start') {
            picker = document.getElementById('beginDatePicker')
            console.log(picker)
            picker.dispatchEvent(new Event("click"))
        } else {
            picker = document.getElementById('deadlinePicker').dispatchEvent(new Event("click"))
            
        }
    }
    
    console.log('reload')
    return <div className="dateInput">
        {props.type === 'start' ? <p>Дата начала</p> : <p>Дата окончания</p>}
        <ReactDatePicker selected={startDate} showIcon onChange={date => setStartDate(date)}/>
        {/* <input type="date" id={props.type === 'start' ? 'beginDatePicker' : 'deadlinePicker'}/>
        <div className="leftCover"></div>
        <div className="rightCover" onClick={pickerClick}></div> */}
        
    </div>
}

export default DateInput