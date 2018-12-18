import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './components/common/bootstrap';
import './styles/template.css';
import './styles/styles.css';
import './styles/style.css';
import './styles/site';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LandingPage from './components/landingpage/LandingPage';




class App extends Component {
    render() {
        return (
                   
                <div>
                <Header />
                    <Switch>
                        <Route path="/" component={LandingPage} />
                        {/* <Redirect from="/" to="/home" /> */}
                    </Switch>
                <Footer />
                </div>

            
        )
    }
}

export default App;
