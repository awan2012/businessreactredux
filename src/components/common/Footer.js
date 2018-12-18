import React from 'react';

const Footer =() => {
   return(
     <section id="footer">
      <div className="next-btn">
        <a href="#home"><i className="fa fa-angle-double-up"></i></a>
      </div>
      <div className="up-section top-space">
        <div className="container cont-sm">
          <div className="footer-wrap">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h4 className="f-heading">ABCS Solutions &copy; 2016-2017</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="social-wrap">
                <a href="!#"><span className="fb"><i className="fa fa-facebook" aria-hidden="true"></i></span></a>
                <a href="!#"><span className="fb dribble"><i className="fa fa-dribbble" aria-hidden="true"></i></span></a>
                <a href="!#"><span className="fb twitter"><i className="fa fa-twitter" aria-hidden="true"></i></span></a>
                <a href="!#"><span className="fb gplus"><i className="fa fa-google-plus" aria-hidden="true"></i></span></a>
                <a href="!#"><span className="fb linked"><i className="fa fa-linkedin" aria-hidden="true"></i></span></a>

              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Footer;