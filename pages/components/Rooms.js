import React from 'react';
import Hotelroom from './Hotelroom';

const Rooms = ({rooms,selectroom}) => {
	return (
		<div id="rooms">
			<div className="page">
				<h3 className="heading">Our Rooms</h3>
				<div className="roomgrid">
					{rooms && rooms.map((room)=><Hotelroom selectroom={selectroom} key={room.roomid} room={room}/>)}
				</div>
			</div>
		</div>
	);
};

export default Rooms;
