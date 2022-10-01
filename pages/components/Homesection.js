import React from 'react';

const Homesection = ({setbookingform}) => {
	return (
		<div id="homesection">
			<div className="intro">
				<h1>PrimeHotel</h1>
				<h3>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Tempore sequi voluptas recusandae quo?
				</h3>
                <button onClick={()=>setbookingform(true)} className="click">Instant Booking</button>
			</div>
		</div>
	);
};

export default Homesection;
