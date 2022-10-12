import Image from 'next/image';
import React from 'react';

const Hotelroom = ({ room,selectroom }) => {
	return (room?(<div className="room">
			<div className="roomimage">
					<Image layout='fill'
						src={`/images/${room.roomimage}.jpg`}
						alt={room.roomname}
					/>
			</div>
			<div className="info">
				<p className="roomname">{room.roomname}</p>
				<p className="roomdetails">{room.roomdetails}</p>
			</div>
			<button onClick={()=>{selectroom(room)}} className="click">
				<i class="fa-solid fa-book"></i>
			</button>
		</div>):<p>Loading</p>)
};

export default Hotelroom;
