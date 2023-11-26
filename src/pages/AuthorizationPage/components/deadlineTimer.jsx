import { useState } from "react"

const DeadLineTimer = () => {
    const date = new Date()
    const timerms = Date.parse('Dec, 20, 2023') - Date.parse(date)
    const [timer, setTimer] = useState(`${Math.floor(timerms/1000/60/60/24)} дней ${Math.floor(timerms/1000/60/60%24)} часов ${Math.floor(timerms/1000/60%60)} минут ${timerms/1000%60} секунд`)
    setTimeout(() => {setTimer(`${Math.floor(timerms/1000/60/60/24)} дней ${Math.floor(timerms/1000/60/60%24)} часов ${Math.floor(timerms/1000/60%60)} минут ${timerms/1000%60} секунд`)},1000)

    return <h1>
        {timer}
    </h1>
}

export default DeadLineTimer