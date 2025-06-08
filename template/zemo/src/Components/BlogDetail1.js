import { Link } from 'react-router-dom';


export default function BlogDetail1({ close }) {
    return (
        <>
            <div className="blog-listing">
                    <button className="btn-close" onClick={close}></button>
                    <article className="article">
                        <div className="article-img">
                            <img src="img/blog-1.jpg" alt="" />
                        </div>
                        <div className="article-title">
                            <h6><Link to="#">Lifestyle</Link></h6>
                            <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
                            <div className="d-flex media">
                                <div className="avatar">
                                    <img src="img/team-2.jpg" alt="" />
                                </div>
                                <div className="col ps-3 media-body">
                                    <label>Zemo Roth</label>
                                    <span>26 FEB 2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="article-content">
                            <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.</p>
                            <p>Eget aenean tellus venenatis. Donec odio tempus. Felis arcu pretium metus nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.</p>
                            <h4>What are my payment options?</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <p className="blockquote-footer">Someone famous in <cite title="Source Title">Dick Grayson</cite></p>
                            </blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </article>
            </div>
        </>
    )
}