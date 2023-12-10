import { Route, Routes, useNavigate } from "react-router-dom";
import StudentSubjectPage from "../StudentPages/StudentSubjectPage/StudentSubjectPage";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import StudentsMainPage from "../StudentPages/StudentMainPage/StudentMainPage";
import ProgrammEditPage from "../TeacherPages/TeacherProgrammEditPage/ProgrammEditPage";
import TeacherMainPage from "../TeacherPages/TeacherMainPage/TeacherMainPage";
import Loading from "../../components/Loading/Loading";

const MainPage = () => {
    const navigate = useNavigate()
    useEffect(() => { if (!localStorage.getItem('user')) navigate('/') }, [])

    return <div style={{ width: "100%" }}>
        <Header />
        <Routes>
            <Route path="/" element={JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).Type ? <StudentsMainPage /> : <TeacherMainPage /> : ""} />
            <Route path="/subject-labs" element={<StudentSubjectPage />} />
            <Route path="/programm-edit-page/:programmId" element={<ProgrammEditPage />} />
            <Route path="/loading" element={<Loading />} />
        </Routes>
    </div>
}

export default MainPage