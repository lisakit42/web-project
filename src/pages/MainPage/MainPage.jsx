import { Route, Routes, useNavigate } from "react-router-dom";
import StudentSubjectPage from "../StudentPages/StudentSubjectPage/StudentSubjectPage";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import StudentsMainPage from "../StudentPages/StudentMainPage/StudentMainPage";
import ProgrammEditPage from "../TeacherPages/TeacherProgrammEditPage/ProgrammEditPage";
import TeacherMainPage from "../TeacherPages/TeacherMainPage/TeacherMainPage";

const labList = [
    { id: '1', startDate: '01.09.2023', title: 'Учимся писать в ворде', deadline: '01.09.2023', link: '', status: '1' },
    { id: '2', startDate: '01.09.2023', title: 'Писать в ворде научились, учимся качать редактор поинтереснее', deadline: '07.09.2023', link: '', status: '1' },
    { id: '3', startDate: '01.09.2023', title: 'Ohmygod, is it sharp C?', deadline: '21.09.2023', link: '', status: '2' },
    { id: '4', startDate: '01.09.2023', title: 'Oh, no, it is Java.', deadline: '05.10.2023', link: '', status: '3' },
    { id: '5', startDate: '01.09.2023', title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '0' },
    { id: '6', startDate: '01.09.2023', title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' },
    { id: '7', startDate: '01.09.2023', title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' },
    { id: '8', startDate: '01.09.2023', title: 'Выучить английский за 15 минут? Легко, нужно всего то скачать редактор...', deadline: '19.10.2023', link: '', status: '' }]

const programms = [
    {
        id: 1,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 15
    },
    {
        id: 2,
        subject: 'Прикладная информатика',
        course: 2,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 3
    },
    {
        id: 3,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'БИ',
        labsCount: 10
    },
    {
        id: 4,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 15
    },
    {
        id: 5,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 15
    },
    {
        id: 6,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 15
    },
    {
        id: 7,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 8,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 9,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 10,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 11,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 12,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 13,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 14,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 15,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 16,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 17,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 18,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 19,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 20,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 21,
        subject: 'Прикладная информатика',
        course: 1,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ИТ',
        labsCount: 14
    },
    {
        id: 22,
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        id: 23,
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        id: 24,
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        id: 25,
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        id: 26,
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        id: 27,
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        id: 28,
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        id: 29,
        subject: 'Математичесикий анализ',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 4
    },
    {
        id: 30,
        subject: 'Базы данных',
        course: 3,
        sem: 1,
        faculty: 'ФПИ',
        group: 'ПИ',
        labsCount: 28
    }
]

const MainPage = () => {
    const navigate = useNavigate()
    useEffect(() => { if (!localStorage.getItem('user')) navigate('/') }, [])

    return <div style={{ width: "100%" }}>
        <Header />
        <Routes>
            <Route path="/" element={JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).Type ? <StudentsMainPage /> : <TeacherMainPage programms={programms} /> : ""} />
            <Route path="/subject-labs" element={<StudentSubjectPage labList={labList} />} />
            <Route path="/programm-edit-page/:programmId" element={<ProgrammEditPage programms={programms} labList={labList} />} />
        </Routes>
    </div>
}

export default MainPage