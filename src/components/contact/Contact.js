import React from 'react';


class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div className="container cont-sm">
                    <div className="contact-wraper">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="contact-title">CONTACT</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="map"></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="address-wrap">
                                        <div className="address-title">Address</div>
                                        <div className="col-lg-2">
                                            <div className="address-circle">1</div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="address-content">9870 St Vincent Place, Glasgow, DC 45 Fr 45. Freephone: +1 800 559 6580 FAX: +1 800 889 9898 </div>
                                        </div>

                                        <div className="col-lg-2">
                                            <div className="address-circle">2</div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="address-content">9870 St Vincent Place, Glasgow, DC 45 Fr 45. Freephone: +1 800 559 6580 FAX: +1 800 889 9898 </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="address-wrap">
                                    <div className="feedback-title">feedback</div>
                                    <form className="form-horizontal">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="name" className="form-control" placeholder="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="msg"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="pull-right">
                                                    <button className="btn sendmsg">SEND</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default Contact;