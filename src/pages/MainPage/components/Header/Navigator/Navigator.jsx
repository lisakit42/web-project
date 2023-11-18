import { Link } from "react-router-dom"

const Navigator = (props) => {
    console.log(props.history.map((el) =>  <Link to={'/'}>{el}</Link>))
    return <div>
        {props.history.map((el) => {el = <Link to={'/'}>{el}</Link>})}
    </div>
}

export default Navigator