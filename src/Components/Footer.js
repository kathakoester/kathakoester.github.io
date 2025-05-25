import { Link } from 'react-router-dom';

export default function Footer() {
    const footer_menu = [
        {'id': 'footer0', 'scroll_link': '#', 'icon': 'bi bi-facebook'},    
        {'id': 'footer1', 'scroll_link': '#', 'icon': 'bi bi-twitter'},    
        {'id': 'footer2', 'scroll_link': 'https://www.instagram.com/pxdraft', 'icon': 'bi bi-instagram'},    
        {'id': 'footer3', 'scroll_link': '#', 'icon': 'bi bi-linkedin'},    
    ];

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 my-2">
                            <div className="nav justify-content-center justify-content-md-start">
                                {
                                    footer_menu.map((val) => {
                                        return <Link key={val.id} to={val.scroll_link}>
                                            <i className={val.icon}></i>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-md-6 my-2 text-center text-md-end">
                            <p>© 2024 copyright <Link to="#">pxdraft</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}