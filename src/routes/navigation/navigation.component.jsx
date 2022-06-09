import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.styless.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link to='/shop' className='nav-link'>SHOP</Link>
                </div>
            </div>
            <Outlet></Outlet>
        </Fragment>
    )


}
export default Navigation;