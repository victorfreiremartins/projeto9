import {Link} from 'react-router-dom'

const Nav =()=>{
    return(
        <>
        <Link to="/">Home</Link>
        <Link to="/produto">Cadastar Produto</Link>
        </>
    )
}

export default Nav