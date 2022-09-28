import React from 'react'

const Hotelroom = ({room}) => {
  return (
    <div className="room">
						<div className="roomimage">
                            <img src={`./images/${room.roomimage}`} alt="roomimage" />
                        </div>
						<div className="info">
                            <p className="roomname">{room.roomname}</p>
						<p className="roomdetails">
							{room.roomdetails}
						</p>
                        </div>
                        <button className="click"><i class="fa-solid fa-book"></i></button>
					</div>
  )
}

export default Hotelroom