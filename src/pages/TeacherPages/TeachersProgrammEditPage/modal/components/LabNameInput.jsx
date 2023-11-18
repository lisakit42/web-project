import { useState } from "react";

const LabNameInput = (props) => {
    const [name, setName] = useState    (props.name || "")
    return <div className="nameInputWrapper">
        <input className={'labNameInput ' + name ? 'filled' : ''} type="text" id='name' onInput={el => setName(el.target.value)} onBlur={el => { if (!el.target.value) el.target.labels[0].classList.remove('active') }} onFocus={el => el.target.labels[0].classList.add('active')} />
        <label className='nameLabel' onClick={el => console.log(el.target.offsetParent)} htmlFor='name'>Название</label>
        {/* <span className=>✔</span> */}
    </div>
} 

export default LabNameInput;