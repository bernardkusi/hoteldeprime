import React from 'react';
import Header from './components/Header';
import Pageheader from './components/Pageheader';
 
const services = () => {
	return (
		<>
			<Pageheader title="hotel services" />
			<div id='servicepage'>
				<div className="page">
					<Header title={'Our Services'} />
                    
					<div className="serviceflex">
                        <div className="serviceimage">
                            <picture>
                                <img src="images/bacd.jpg" alt="serviceimage" />
                            </picture>
                        </div>
						<div className="servicedetails">
							<p className="servicename">Lorem, ipsum.</p>
							<p className="servcietext">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Error culpa deserunt optio
								molestias suscipit doloremque incidunt, ipsa,
								eum temporibus sunt eveniet impedit corporis.
							</p>
						</div>
					</div>

					<div className="serviceflex">
                        <div className="serviceimage">
                            <picture>
                                <img src="images/bacd.jpg" alt="serviceimage" />
                            </picture>
                        </div>
						<div className="servicedetails">
							<p className="servicename">Lorem, ipsum.</p>
							<p className="servcietext">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Error culpa deserunt optio
								molestias suscipit doloremque incidunt, ipsa,
								eum temporibus sunt eveniet impedit corporis.
							</p>
						</div>
					</div>

					<div className="serviceflex">
                        <div className="serviceimage">
                            <picture>
                                <img src="images/bacd.jpg" alt="serviceimage" />
                            </picture>
                        </div>
						<div className="servicedetails">
							<p className="servicename">Lorem, ipsum.</p>
							<p className="servcietext">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Error culpa deserunt optio
								molestias suscipit doloremque incidunt, ipsa,
								eum temporibus sunt eveniet impedit corporis.
							</p>
						</div>
					</div>

					<div className="serviceflex">
                        <div className="serviceimage">
                            <picture>
                                <img src="images/bacd.jpg" alt="serviceimage" />
                            </picture>
                        </div>
						<div className="servicedetails">
							<p className="servicename">Lorem, ipsum.</p>
							<p className="servcietext">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Error culpa deserunt optio
								molestias suscipit doloremque incidunt, ipsa,
								eum temporibus sunt eveniet impedit corporis.
							</p>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default services;
