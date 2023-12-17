import { useState } from "react";

const LabNameInput = (props) => {
    return <div className="nameInputWrapper">
        <input className='labNameInput' type="text" id='name' value={props.name} onInput={el => props.setName(el.target.value)} onBlur={el => { if (!el.target.value) el.target.labels[0].classList.remove('active') }} onFocus={el => el.target.labels[0].classList.add('active')} />
        <label className={'nameLabel ' + (props.name ? 'active' : '')} onClick={el => console.log(el.target.offsetParent)} htmlFor='name'>Название</label>
    </div>
} 

export default LabNameInput;