import { Route, Routes, useNavigate } from "react-router-dom";
import ProgrammTile from "../TeacherPages/TeachersProgrammsPage/components/ProgrammTile/ProgrammTile";
import StudentSubjectPage from "../StudentPages/StudentSubjectPage/StudentSubjectPage";
import { useEffect } from "react";
import Header from "../../components/Header/Header";
import StudentsMainPage from "../StudentPages/StudentsMainPage/StudentsMainPage";

const MainPage = () => {
    const navigate = useNavigate()
    useEffect(() => {if (!localStorage.getItem('user')) navigate('/')}, [])
    return <div style={{width:"100%"}}>
        <Header />
        <Routes>
            <Route path="/" element={JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')).student ? <StudentsMainPage /> : <ProgrammTile /> : ""} />
            <Route path="/subject-labs" element={<StudentSubjectPage />} />
        </Routes>
    </div>
}

export default MainPage