import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

/*--------------------
* Header Menu
----------------------*/

function Menu(props){
    return (
        <li>
            <ScrollLink 
                to={props.scrollLink}
                smooth={true}
                duration={500}
                offset={props.offset}
                className={props.className}
                data-scroll-nav={props.id}
            >
                <span>{props.name}</span>
            </ScrollLink>
        </li>
    );
}

/*--------------------
* Header
----------------------*/

export default function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(0);
    const { toggleTheme } = useTheme();

    const header_menus = [
        { id:'0', name:'Home', scrollLink:'home', offset: 0 },
        { id:'1', name:'About Us', scrollLink:'about', offset: 0 },
        { id:'2', name:'Services', scrollLink:'services', offset: 0 },
        { id:'3', name:'Portfolio', scrollLink:'work', offset: 0 },
        { id:'4', name:'Blog', scrollLink:'blog', offset: 0 },
        { id:'5', name:'Contact', scrollLink:'contactus', offset: 0 }
    ]

    return (
        <>
            <header className="main-header">
                <nav className="navbar header-nav header-white header-transparent navbar-expand-lg one-page-nav">
                    <div className="container">
                        <RouterLink className="navbar-brand" to="/">Zemo</RouterLink>
                        <button className="navbar-toggler" type="button" onClick={() => setIsOpenMenu(!isOpenMenu)} data-bs-toggle="collapse" data-bs-target="#navbar-collapse-toggle" aria-controls="navbar-collapse-toggle" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={`collapse navbar-collapse justify-content-end ${isOpenMenu ? 'menu-open show' : ''}`} id="navbar-collapse-toggle">
                            <ul className="navbar-nav lg:ml-auto">
                                {
                                    header_menus.map((val) => {
                                        return <Menu className="nav-link" key={val.id} id={val.id} name={val.name} scrollLink={val.scrollLink} offset={val.offset}/>
                                    })
                                }
                            </ul>
                        </div>
                        <button onClick={toggleTheme} className="theme-toggle-btn">
                            <i className="bi bi-sun"></i>
                            <i className="bi bi-moon-stars"></i>  
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
