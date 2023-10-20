import { useNavigate } from "react-router-dom";
import ProgrammTile from "../ProgrammsPage/components/ProgrammTile/ProgrammTile";
import StudentSubjectPage from "../StudentSubjectPage/StudentSubjectPage";
import { useEffect } from "react";
import Header from "../../components/Header/Header";

const MainPage = () => {
    const navigate = useNavigate()
    useEffect(() => {if (!localStorage.getItem('student')) navigate('/')}, [])
    return <div style={{width:"100%"}}>
        <Header/>
        {JSON.parse(localStorage.getItem('student')) ? <StudentSubjectPage /> : <ProgrammTile />}
    </div>
}

export default MainPage