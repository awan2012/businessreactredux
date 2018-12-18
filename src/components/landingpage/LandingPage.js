import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomePage from '../home/HomePage';
import About from '../about/About';
import Services from '../services/Services';
import Work from '../work/Work';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';



class LandingPage extends React.Component {
    render() {
        const { abouts } = this.props;
        const { services } = this.props;
        const { blogs } = this.props;
        return (
            <div>
                <HomePage />
                <About abouts={abouts} />
                <Services services={services} />
                <Work />
                <Blog blogs={blogs} />
                <Contact />
            </div>
        );
    }
}
LandingPage.propTypes = {
    abouts: PropTypes.array.isRequired,
    services: PropTypes.array.isRequired,
    blogs: PropTypes.array.isRequired
};
function mapStateToProps(state) {
    return {
        abouts: state.abouts,
        services: state.services,
        blogs: state.blogs
    };
}

export default connect(mapStateToProps, null)(LandingPage);