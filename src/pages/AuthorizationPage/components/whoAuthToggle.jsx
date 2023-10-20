import StudentSvg from "../svg/Student.svg"
import TeacherSvg from "../svg/Teacher.svg"
import "./whoAuthToggle.scss"

const WhoAuthToggle = (props) => {
    const student = props.student;
    return <div>
        <div className="toggleWrapper">
            <div className={"ToggleItem " + (student ? "active" : "")} onClick={() => { if (!student) props.setStudent() }}>
                <img src={StudentSvg} alt="" className="ItemSvg" />
                <p className="whoAuth">Как студент </p>
            </div>
            <div className={"ToggleItem " + (student ? "" : "active")} onClick={() => { if (student) props.setStudent() }}>
                <img src={TeacherSvg} alt="" className="ItemSvg" />
                <p className="whoAuth">Как преподаватель </p>
            </div>
        </div>
    </div>
}

export default WhoAuthToggle