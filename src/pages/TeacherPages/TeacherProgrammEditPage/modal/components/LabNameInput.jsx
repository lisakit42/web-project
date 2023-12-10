import { useState } from "react";

const LabNameInput = (props) => {
    return <div className="nameInputWrapper">
        <input className={'labNameInput ' + (props.name ? 'filled' : '')} type="text" id='name' onInput={el => props.setName(el.target.value)} onBlur={el => { if (!el.target.value) el.target.labels[0].classList.remove('active') }} onFocus={el => el.target.labels[0].classList.add('active')} />
        <label className='nameLabel' onClick={el => console.log(el.target.offsetParent)} htmlFor='name'>Название</label>
        {/* <span className=>✔</span> */}
    </div>
} 

export default LabNameInput;