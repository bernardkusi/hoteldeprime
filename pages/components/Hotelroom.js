import Image from 'next/image';
import React from 'react';

const Hotelroom = ({ room }) => {
	return (
		<div className="room">
			<div className="roomimage">
					{room.roomimage && (<Image layout='fill'
						src={`/images/${room.roomimage}`}
						alt={room.roomname}
					/>)}
			</div>
			<div className="info">
				<p className="roomname">{room.roomname}</p>
				<p className="roomdetails">{room.roomdetails}</p>
			</div>
			<button className="click">
				<i class="fa-solid fa-book"></i>
			</button>
		</div>
	);
};

export default Hotelroom;
