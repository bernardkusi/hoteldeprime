import React from 'react';

const Bookingform = ({ rooms, bookingform, closemodals, selectedroom }) => {
	return (
		<div
			className={[bookingform ? 'backdrop visible' : 'backdrop']}
			onClick={(e) => closemodals(e)}
		>
			<div className="form">
				<form action="">
					<p className="label">Book A Room Now</p>
					<div className="formcontrol">
						<input type="text" name="name" id="name" />
						<label htmlFor="name">Your Name</label>
					</div>
					<div className="formcontrol">
						<input type="text" name="email" id="email" />
						<label htmlFor="email">Your email</label>
					</div>
					<div className="formcontrol">
						<input type="text" name="telephone" id="telephone" />
						<label htmlFor="telephone">Your telephone</label>
					</div>
					<div className="formcontrol">
						<select name="service" id="service">
							<option value="room" selected={selectedroom?"selected":""}>Book a room</option>
							<option value="auditorium">
								Use our auditorium
							</option>
						</select>
						<label htmlFor="service">Select A Service</label>
					</div>

					<div className="formcontrol">
						<select name="room" id="room">
							{rooms &&
								rooms.map((room) => (
									<option
										key={room.roomid}
										selected={
											room.roomid == selectedroom.roomid
												? 'selected'
												: ''
										}
										value={`room${room.roomid}`}
									>{`Guest Room ${room.roomid}`}</option>
								))}
						</select>
						<label htmlFor="room">Select a room</label>
					</div>
					<div className="formcontrol">
						<input type="date" name="date" id="date" />
						<label htmlFor="date">Date</label>
					</div>
					<button className="click">Book Room Now</button>
				</form>
			</div>
		</div>
	);
};

export default Bookingform;
