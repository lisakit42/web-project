import { useEffect, useState } from "react"


let day = 1, month = 1, year;
const DateInput = (props) => {
    const [inputsSet, setInputsSet] = useState({});
    const monthCorrect = (ev) => {
        console.log('changed' , ev)
        const tempSet = {...inputsSet};
        switch (ev.target.value) {
            case'1':
            case'3':
            case'5':
            case'7':
            case'8':
            case '10':
            case '12':
                for (let i = tempSet.days[tempSet.days.length - 1]; i <= 31; i++) {
                    tempSet.days.push(i)
                }
            case'2': 
                if (year % 4 === 0) {
                    tempSet.days.length = 29
                } else {
                    tempSet.days.length = 28
                }
            default:
                break;
        }
        console.log(inputsSet, tempSet )
        setInputsSet(tempSet)
    }
    useEffect(() => {
        let tempSet = { days: [], months: [], years: [] }
        for (let i = 1; i <= 31; i++) {
            tempSet.days.push(i)
        }
        for (let i = 1; i <= 12; i++) {
            tempSet.months.push(i)
        }
        tempSet.years.push((new Date()).getFullYear())
        tempSet.years.push((new Date()).getFullYear() + 1)
        year = tempSet.years[0]
        setInputsSet(tempSet)
    }, [])
    console.log('reload')
    return <div className="dateInput">
        {props.type === 'start' ? <p>Дата начала</p> : <p>Дата окончания</p>}
        <div className="dateInputs">
            <select name="date" id="">
                {inputsSet.days && inputsSet.days.map(el => <option value={el}>{el}</option>)}
            </select>
            <select name="month" onChange={monthCorrect} id="">
                {inputsSet.months && inputsSet.months.map(el => <option value={el}>{el}</option>)}
            </select>
            <select name="year" id="">
                {inputsSet.years && inputsSet.years.map(el => <option value={el}>{el}</option>)}
            </select>
        </div>
    </div>
}

export default DateInput