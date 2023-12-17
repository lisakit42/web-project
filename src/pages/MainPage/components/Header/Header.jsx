import './Header.scss'
import BigLogo from './BigLogoWhite.svg'
import Ava from '../../../TeacherPages/TeacherProgrammsList/components/ProgrammTile/KubsauLogo.svg'
import { useState } from 'react';
import AccActions from './AccActions';

const Header = () => {
    return <header>
        <img src={BigLogo}  className='headerLogo'/>
        <div className='headerUser' onClick={() => {document.querySelector('.accActionsWrapper').classList.add('show');document.querySelector('.accActionsWrapper').focus()}}>
            <p className='fioLink'>{localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).Surname_Name : ''}</p>
            <div className='avatar'>
                <img src={Ava} alt="" />
            </div>
            <AccActions /> 
        </div>
    </header>
}

export default Header