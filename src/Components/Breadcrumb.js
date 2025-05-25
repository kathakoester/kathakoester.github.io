import { Link } from 'react-router-dom';

export default function BreadCrumb(props) {
    return (
        <>
            <section className="page-title dark-bg-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 white-color text-center">
                            <h1>{props.title}</h1>
                            <ol className="breadcrumb justify-content-center">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">Blog List</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}