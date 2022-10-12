import React from 'react';
import Bookingform from './Bookingform';
import Contactform from './Contactform';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({
	selectedroom,
	children,
	togglenav,
	navopen,
	bookingform,
	contactform,
	setbookingform,
	setcontactform,
	closemodals,
  rooms
}) => {
	return (
		<>
			<Nav togglenav={togglenav} navopen={navopen} />
			<Bookingform
				bookingform={bookingform}
				selectedroom={selectedroom}
				closemodals={closemodals}
        rooms={rooms}
			/>
			<Contactform contactform={contactform} closemodals={closemodals} />
			<main>{children}</main>
			<div className="clickables">
				<button
					className="click clickable"
					onClick={() => setbookingform(true)}
				>
					<i class="fa-solid fa-book"></i>
					<span>Book A Room</span>
				</button>
				<button
					className="click clickable"
					onClick={() => setcontactform(true)}
				>
					<i class="fa-solid fa-comment"></i>
					<span>Send A Message</span>
				</button>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
