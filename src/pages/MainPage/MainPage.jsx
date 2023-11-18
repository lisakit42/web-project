import { Link, Route, Routes, useNavigate } from "react-router-dom";
import ProgrammTile from "../TeacherPages/TeachersProgrammsPage/components/ProgrammTile/ProgrammTile";
import StudentSubjectPage from "../StudentPages/StudentSubjectPage/StudentSubjectPage";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import StudentsMainPage from "../StudentPages/StudentMainPage/StudentMainPage";
import ProgrammEditPage from "../TeacherPages/TeachersProgrammEditPage/ProgrammEditPage";
import TeacherMainPage from "../TeacherPages/TeacherMainPage/TeacherMainPage";
import Navigator from "./components/Header/Navigator/Navigator";

const labList = [
    {id:'1', startDate: '01.09.2023', title: 'Учимся писать в ворде', deadline: '01.09.2023', link: '', status: '1' },
    {id:'2', startDate: '01.09.2023', title: 'Писать в ворде научились, учимся качать редактор поинтереснее', deadline: '07.09.2023', link: '', status: '1' },
    {id:'3', startDate: '01.09.2023', title: 'Ohmygod, is it sharp C?', deadline: '21.09.2023', link: '', status: '2' },
    {id:'4', startDate: '01.09.2023', title: 'Oh, no, it is Java.', deadline: '05.10.2023', link: '', status: '3' },
    {id:'5', startDate: '01.09.2023', title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '0' },
    {id:'6', startDate: '01.09.2023', title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' },
    {id:'7', startDate: '01.09.2023', title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' },
    {id:'8', startDate: '01.09.2023', title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' }]

const History = []

const MainPage = () => {
    const navigate = useNavigate()
    useEffect(() => {if (!localStorage.getItem('user')) navigate('/')}, [])
    return <div style={{width:"100%"}}>
        <Header />
        <Navigator history={History}/>
        <Routes>
            <Route path="/" element={JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).Type ? <StudentsMainPage history={History} /> : <TeacherMainPage history={History} /> : ""} />
            <Route path="/subject-labs" element={<StudentSubjectPage labList={labList}/>} />
            <Route path="/programm-edit-page" element={<ProgrammEditPage labList={labList}/>} />
        </Routes>
    </div>
}

export default MainPage