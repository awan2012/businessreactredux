import React from 'react';



class HomePage extends React.Component {
    render() {
        return (
           
            <section id="home">
                <div className="down-section top-space">
                    <div className="cont-md">
                        <div className="row">
                            <div className="col-lg-6 text">
                                {/*<!--Carousal-->*/}
                                <div className="content-box">
                                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner" role="listbox">
                                            <div className="item active">
                                                <img src={require("../../images/1.jpg")} alt="" />
                                            </div>
                                            <div className="item">
                                                <img src={require("../../images/2.png")} alt="" />
                                                <div className="carousel-caption">
                                                </div>
                                            </div>
                                            <div className="item">
                                                <img src={require("../../images/3.png")} alt="" />
                                            </div>
                                            <div className="item">
                                                <img src={require("../../images/2.png")} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*<!--Carousal End-->*/}
                            </div>
                            <div className="col-lg-6">
                                <div className="content-box">
                                    <h2>Wellcome!</h2>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
                  at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                  as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                  ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact
                  that a reader will be distracted by the readable content of a page when looking at its layout. The point
                  of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
                  'Content here, content here', making it look like readable English. Many desktop publishing packages and
                  web page editors now use Lorem Ipsum as their default model text,
                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="next-btn">
                        <a href="#services"><i className="fa fa-angle-double-down"></i></a>
                    </div>

                </div>

            </section>
            
        );
    }
}
export default HomePage;