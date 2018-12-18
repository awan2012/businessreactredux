import React from 'react';
import PropTypes from 'prop-types';


const Blog = ({blogs}) => {
        return (
            <section id="blog">
                <div className="next-btn">
                    <a href="contact"><i className="fa fa-angle-double-down"></i></a>
                </div>
                <div className="up-section top-space">
                    <div className="down-section">
                        <div className="container cont-sm">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="blog-title">BLOG</h2>
                                </div>
                            </div>
                            <div className="row">
                                {blogs.map(blog =>
                                <div className="col-lg-3 col-md-6 col-sm-6" key={blog.id}>
                                    <div className="blog-box">
                                        <img src={require("../../images/2.png")} className="img-responsive img-thumbnail" alt=""/>
                                        <h5>{blog.postby}, {blog.postdate}</h5>
                                        <a href="!#">
                                            <h4> {blog.posttitle}</h4>
                                        </a>
                                        <p>{blog.postcontent}</p>
                                    </div>
                                </div>
                                )}
                                
                            </div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <a href="!#" className="btn more-blogs">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="next-btn">
                            <a href="#contact"><i className="fa fa-angle-double-down"></i></a>
                        </div>
                    </div>
                </div>
            </section>

        );
    };
    Blog.propTypes = {
  blogs: PropTypes.array.isRequired
};

export default Blog;