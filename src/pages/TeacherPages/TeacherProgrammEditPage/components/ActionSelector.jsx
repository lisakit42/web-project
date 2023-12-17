import AddLabModal from '../modal/AddLabModal';
import ReactDOM from 'react-dom'
import './ActionSelector.scss'
import { useState } from 'react';

let downloadHover = false;

const portal = document.getElementById('modal');


const ActionSelector = (props) => {
    const [isEdit, setEdit] = useState(false)

    const close = () => {
        const actionSelector = document.getElementById(`actionSelector_${props.labInfo.number}`).classList
        actionSelector.add('close')
        setTimeout(() => {
            actionSelector.remove('close')
            actionSelector.remove('show')
        }, 200)
    }
    console.log(props.labInfo)

    return <div className="selectorWrapper">
        <span onClick={() => {
            document.getElementById(`actionSelector_${props.labInfo.number}`).classList.add('show');
            document.getElementById(`actionSelector_${props.labInfo.number}`).focus();
        }} className='dotsButton'>
            •••
        </span>
        <div id={`actionSelector_${props.labInfo.number}`} className="selectorWindow" tabIndex='0' onBlur={() => { if (!downloadHover) close() }} >
            <a href={props.labInfo.link} >
                <span onClick={close} className="downloadActionBtn" onMouseOver={() => { downloadHover = true }} onMouseOut={() => { downloadHover = false }}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path d="M4628 9493 l-3 -2408 -851 -5 -850 -5 1642 -2173 c903 -1195 1646 -2174 1651 -2175 4 0 748 978 1651 2174 l1644 2174 -851 3 -851 2 0 2410 0 2410 -1590 0 -1590 0 -2 -2407z" />
                            <path d="M2140 1870 l0 -620 4310 0 4310 0 0 620 0 620 -4310 0 -4310 0 0 -620z" />
                        </g>
                    </svg>
                </span>
            </a>
            <span className="editActionBtn" onClick={() => { setEdit(true); close() }}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="752.000000pt" height="752.000000pt" viewBox="0 0 752.000000 752.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,752.000000) scale(0.100000,-0.100000)"
                        stroke="none">
                        <path d="M4810 5615 l-255 -255 402 -402 403 -403 255 255 255 255 0 65 0 65 -338 338 -337 337 -65 0 -64 0 -256 -255z" />
                        <path d="M3107 3912 l-1107 -1107 -184 -585 c-102 -322 -184 -586 -182 -587 1 -1 265 80 586 182 l584 184 1111 1111 1110 1110 -400 400 c-220 220 -402 400 -405 400 -3 0 -503 -498 -1113 -1108z" />
                    </g>
                </svg>
            </span>
            <span className="deleteActionBtn" onClick={props.deleteLab}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                        <path d="M2059 4820 c-107 -19 -222 -93 -281 -181 -20 -30 -82 -165 -139 -301 l-102 -248 -462 0 -462 0 -24 -26 c-23 -24 -24 -32 -24 -156 l0 -130 28 -24 c27 -23 34 -24 183 -24 l154 0 0 -1395 c0 -1554 -3 -1480 68 -1625 47 -95 142 -195 227 -236 l60 -29 1269 -3 c1108 -2 1276 0 1322 13 108 31 228 151 288 288 58 129 56 83 56 1597 l0 1390 154 0 c149 0 156 1 183 24 l28 24 0 130 c0 124 -1 132 -24 156 l-24 26 -458 0 c-353 0 -459 3 -466 13 -6 6 -57 124 -114 262 -70 169 -116 265 -142 297 -43 55 -118 108 -198 141 -53 21 -63 22 -554 24 -275 0 -521 -2 -546 -7z m1000 -377 c18 -15 151 -318 151 -344 0 -5 -275 -9 -635 -9 -352 0 -635 4 -635 9 0 23 135 328 152 344 19 16 56 17 483 17 426 0 464 -1 484 -17z m796 -2108 l0 -1390 -23 -50 c-13 -27 -33 -60 -44 -72 l-21 -23 -1192 0 -1192 0 -22 24 c-12 13 -31 46 -41 75 -20 50 -20 86 -20 1441 l0 1390 1278 -2 1277 -3 0 -1390z" />
                        <path d="M1689 3151 l-29 -30 2 -860 3 -860 23 -23 c20 -21 34 -23 128 -26 141 -5 170 1 195 41 19 31 19 53 17 885 l-3 854 -28 24 c-26 23 -35 24 -153 24 l-126 0 -29 -29z" />
                        <path d="M2423 3156 l-28 -24 0 -866 0 -865 23 -23 c21 -22 30 -23 157 -23 127 0 136 1 157 23 l23 23 0 865 0 866 -28 24 c-26 23 -35 24 -152 24 -117 0 -126 -1 -152 -24z" />
                        <path d="M3167 3169 c-47 -27 -47 -27 -47 -904 0 -679 2 -832 14 -859 20 -49 54 -58 191 -54 114 3 117 4 141 31 l24 28 0 855 0 856 -29 29 c-29 29 -30 29 -153 29 -69 0 -131 -5 -141 -11z" />
                    </g>
                </svg>
            </span>
        </div>
        <div>
            {isEdit && ReactDOM.createPortal(<AddLabModal labInfo={props.labInfo} isEdit={isEdit} closeEdit={() => {setEdit(false)}} />, portal)}
        </div>
    </div>
}

export default ActionSelector;