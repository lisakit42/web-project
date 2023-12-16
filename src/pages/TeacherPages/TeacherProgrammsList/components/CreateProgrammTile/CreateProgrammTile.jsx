import { useEffect, useState } from 'react'
import './CreateProgrammTile.scss'
import plus from './img/plus.svg'
import axios from 'axios';
import Loading from '../../../../../components/Loading/Loading';

const CreateProgrammTile = (props) => {
    const [create, setCreate] = useState(false)
    const [close, setClose] = useState(false)
    const [reload, setReload] = useState(false)
    const [data, setData] = useState({
        courseSem: [
            "1 курс 1 семестр",
            "1 курс 2 семестр",
            "2 курс 1 семестр",
            "2 курс 2 семестр",
            "3 курс 1 семестр",
            "3 курс 2 семестр",
            "4 курс 1 семестр",
            "4 курс 2 семестр"
        ],
        faculties: [
            {
                faculty: 'ФПИ',
                able: true,
                groups: [
                    {
                        val: 'ИТ',
                        able: true
                    },
                    {
                        val: 'ПИ',
                        able: true
                    },
                    {
                        val: 'БИ',
                        able: true
                    }
                ]
            },
            {
                faculty: 'ЭК',
                able: true,
                groups: [
                    {
                        val: '1',
                        able: true
                    },
                    {
                        val: '2',
                        able: true
                    },
                    {
                        val: '3',
                        able: true
                    }
                ]
            },
            {
                faculty: 'АГР',
                able: true,
                groups: [
                    {
                        val: '4',
                        able: true
                    },
                    {
                        val: '5',
                        able: true
                    },
                    {
                        val: '6',
                        able: true
                    }
                ]
            },
        ]
    })

    const [loading, setLoading] = useState(false)

    axios.defaults.baseURL = 'http://web-project.somee.com/project/api'
    const addProgrammApi = '/programm'

    const checkAble = (event) => {
        const tempData = { ...data };
        const banList = {};
        const value = event ? event.target.value : '1 курс 1 семестр'
        let programmInfo;
        for (let i = 0; i < props.tiles.length; i++) {
            programmInfo = props.tiles[i].props.programmInfo;
            if (`${programmInfo.course} курс ${programmInfo.sem} семестр` === value) {
                if (banList[`${programmInfo.faculty}`]) banList[`${programmInfo.faculty}`].push(programmInfo.group)
                else banList[`${programmInfo.faculty}`] = [programmInfo.group]
            }
        }
        const resultData = {
            ...data, faculties: tempData.faculties.map(facObj => {
                return {
                    ...facObj,
                    groups: facObj.groups.map(grp => {
                        return { val: grp.val, able: !(banList[facObj.faculty] && banList[facObj.faculty].filter(el => el == grp.val).length) }
                    }),
                    able: banList[facObj.faculty] ? !!facObj.groups.filter(grp => banList[facObj.faculty].filter(el => el !== grp.val).length) : true
                }
            })
        }
        setData({ ...resultData })
    }

    useEffect(checkAble, [])

    return create ?
        <form className="TileWrapper create">
            <select id="semestr" onChange={checkAble} name="semestr">
                {data.courseSem.map(el => <option value={el}>{el}</option>)}
            </select>
            <select id="faculty"  onChange={el => setReload(!reload)} name="faculty">
                {data.faculties.filter(el => el.able).map(el => <option value={`${el.faculty}`}>{el.faculty}</option>)}
            </select>
            <select id="group" name="group">
                {!!data.faculties.filter(el => el.able).length && document.getElementById('faculty') ? data.faculties.filter(el => el.faculty == document.getElementById('faculty').value)[0].groups.filter(el => el.able).map(el => <option value={el.val}>{el.val}</option>) : data.faculties.filter(el => el.able)[0].groups.filter(el => el.able).map(el => <option value={el.val}>{el.val}</option>)}
            </select>
            <button onClick={event => {
                event.preventDefault()
                if (!event.target.form[1].value || !event.target.form[2].value) { alert('Невозможный ввод'); }
                else {
                    setLoading(true);
                    axios.post(addProgrammApi,
                    {
                        teacher_id: JSON.parse(localStorage.getItem('user')).Id,
                        subject: props.subject,
                        course: event.target.form[0].value.split(' ')[0],
                        sem: event.target.form[0].value.split(' ')[2],
                        faculty: event.target.form[1].value,
                        group: event.target.form[2].value
                    }).then(res => props.addTile(
                        {
                            Id: res.data,
                            sem: event.target.form[0].value,
                            faculty: event.target.form[1].value,
                            group: event.target.form[2].value
                        }
                    )).catch(err => console.log(err))}
            }}>Сохранить</button>
            <div className={`createLoadingWrapper ${loading ? 'show' : ''}`}>
                <Loading />
            </div>
            <button className="cancelButton" onClick={el => {
                el.preventDefault()
                el.target.offsetParent.classList.toggle('cancel');
                setTimeout(() => { setCreate(false); setClose(true) }, 200)
            }}>Отменить</button>
        </form>
        :
        <div onClick={(el) => { el.currentTarget.classList.add('hide'); setTimeout(() => { setCreate(true) }, 100) }} className={`createTileWrapper ${close ? 'afterClose' : ''}`}>
            <img src={plus} alt='' className="plusButton"></img>
        </div>
}

export default CreateProgrammTile;