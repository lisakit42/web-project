import { useNavigate } from 'react-router-dom';
import s from './Header.scss'
import BigLogo from './BigLogoWhite.svg'
import Ava from '../../pages/ProgrammsPage/components/ProgrammTile/KubsauLogo.svg'
const Header = () => {
    const navigate = useNavigate()
    return <header>
        <img src={BigLogo}  className='headerLogo'/>
        <button onClick={() => {localStorage.clear(); navigate('/')}}>Logout</button>
        <div className='headerUser'>
            <a className='fioLink'>{localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).fio : ''}</a>
            <div className='avatar'>
                <img src={Ava} alt="" />
            </div>
        </div>
    </header>
}

export default Header