import Popup from 'reactjs-popup';
import BlogDetail1 from './BlogDetail1';
import BlogDetail2 from './BlogDetail2';
import BlogDetail3 from './BlogDetail3';

export default function Blog() {
    const blogs = [
        {'id': 'blog0', 'date': 14, 'month': 'JAN', 'img': 'img/blog-1.jpg', 'title': 'Prevent 75% of visitors from google analytics', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {'id': 'blog1', 'date': 14, 'month': 'JAN', 'img': 'img/blog-2.jpg', 'title': 'Prevent 75% of visitors from google analytics', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {'id': 'blog2', 'date': 14, 'month': 'JAN', 'img': 'img/blog-3.jpg', 'title': 'Prevent 75% of visitors from google analytics', 'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    ]

    const renderPopupContent = (id, close) => {
        switch (id) {
            case 'blog0':
                return <BlogDetail1 close={close} />;
            case 'blog1':
                return <BlogDetail2 close={close} />;
            case 'blog2':
                return <BlogDetail3 close={close} />;
            default:
                return null;
        }
    }
    
    return (
        <>
            <section id="blog" data-scroll-data="4" className="section">
                <div className="text-placeholder">
                    <h5>Blog</h5>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h2><span>Latest Blog</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            blogs.map((val) => {
                                return (
                                    <div className="col-lg-4 my-3" key={val.id}>
                                        <div className="blog-post">
                                            <div className="blog-img">
                                                <div className="data">
                                                    <span>{val.date}</span>
                                                    <small>{val.month}</small>
                                                </div>
                                                <Popup closeOnDocumentClick trigger={<img src={val.img} alt="" />} modal nested contentStyle={{ maxWidth: '80%', width: '800px' }} overlayStyle={{ overflowY: 'auto' }}>
                                                    {close => (
                                                        <>
                                                            {renderPopupContent(val.id, close)}
                                                        </>
                                                    )}
                                                </Popup>
                                            </div>
                                            <div className="blog-info">
                                                <Popup trigger={<h6>{val.title}</h6>} modal nested contentStyle={{ maxWidth: '80%', width: '800px' }} overlayStyle={{ overflowY: 'auto' }}>
                                                    {close => (
                                                        <>
                                                            {renderPopupContent(val.id, close)}
                                                        </>
                                                    )}
                                                </Popup>
                                                <p>{val.description}</p>
                                                <div className="btn-bar">
                                                    <Popup trigger={
                                                        <a className="px-btn-arrow" href='/'>
                                                            <span>Read More</span>
                                                            <i className="arrow"></i>
                                                        </a>
                                                    } modal nested contentStyle={{ maxWidth: '80%', width: '800px' }} overlayStyle={{ overflowY: 'auto' }}>
                                                        {close => (
                                                            <>
                                                                {renderPopupContent(val.id, close)}
                                                            </>
                                                        )}
                                                    </Popup>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}