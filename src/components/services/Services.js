import React from 'react';
import PropTypes from 'prop-types';
const Services = ({services}) => {
        return (
            <section id="services">
               <div className="next-btn">
                        <a href="#works"><i className="fa fa-angle-double-down"></i></a>
                    </div>
                <div className="up-section top-space">
                    <div className="down-section">
                        <div className="container cont-sm">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h2 className="service-title">SERVICES</h2>
                                </div>
                            </div>
                            <div className="row">
                                {services.map(service =>
                                    <div className="col-lg-3 col-md-6 col-sm-6 margin_btm_60" key={service.id}>
                                    <div className="service-box">
                                        <div className="s-img-circle">
                                            <img src={require("../../images/csharp.png")} width="235" height="235" alt="" />
                                            <div className="s-title-circle">
                                                <h4>{service.name}</h4>
                                            </div>
                                            <p className="s-para">{service.description}</p>
                                        </div>
                                        <a href="!#" className="a-more"><span className="s-more">More</span></a>
                                    </div>
                                </div> 
                                )};
                            </div>
                        </div>
                        <div className="next-btn">
                            <a href="#blog"><i className="fa fa-angle-double-down"></i></a>
                        </div>
                    </div>
                </div>
            </section>

        )
    };
Services.propTypes = {
    services: PropTypes.array.isRequired
};
export default Services;