import React from 'react';
import PropTypes from 'prop-types';



class About extends React.Component {

  render() {
    const { abouts } = this.props;
    return (
      <div>
        <section id="about">
          <div className="cont-full">
            <div className="row aboutbox">
              <div className="col-lg-6 col-lg-offset-3 text-center">
                <h2 className="about-title">ABOUT</h2>
                <p className="about-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but also the leap into electronic a type
              specimen book. It has survived not only five centuries, but also the leap into electronic </p>
              </div>
            </div>
          </div>
          <div className="container cont-sm">
            <div className="row">
              {abouts.map(about =>
                <div className="col-lg-3 col-md-6 col-sm-6 margin_btm_60" key={about.id}>
                  <div className="about-box">
                    <div className="img-circle">
                    </div>
                    <div className="img-content">
                      <h2>{about.name}</h2>
                      <p>{about.description}</p>
                    </div>
                  </div>
                </div>)
              }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

About.propTypes = {
  abouts: PropTypes.array.isRequired
};
export default About;