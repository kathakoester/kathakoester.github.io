import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 my-2">
                            <div className="nav justify-content-center justify-content-md-start">
                                <Link to="impressum.html">
                                    <p>Impressum</p>
                                </Link>
                                <Link to="datenschutz.html">
                                    <p>Datenschutz</p>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 my-2 text-center text-md-end">
                            <p>© 2025 Katharina Köster</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
