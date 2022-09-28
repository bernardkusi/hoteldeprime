import React from 'react';
import Hotelroom from './Hotelroom';

const Rooms = ({rooms}) => {
	return (
		<div id="rooms">
			<div className="page">
				<h3 className="heading">Our Rooms</h3>
				<div className="roomgrid">
					{rooms.map((room)=><Hotelroom key={room.roomid} room={room}/>)}
				</div>
			</div>
		</div>
	);
};

export default Rooms;
