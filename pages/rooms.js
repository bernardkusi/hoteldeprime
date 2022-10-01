import React, { useEffect } from 'react'
import Header from './components/Header'
import Hotelroom from './components/Hotelroom'
import Pageheader from './components/Pageheader'

const rooms = ({closenav,rooms}) => {
    // useEffect(() => {
    //     closenav();	
    //   }, [])
  return (
  <>
  <Pageheader title="hotel Rooms"/>
    <div id="rooms">
    <div className="page">
    <Header title={"View all rooms here"}/>
        <h3 className="heading">All Rooms</h3>
        <div className="roomgrid">
          {rooms && rooms.map((room)=><Hotelroom key={room.roomid} room={room}/>)}
        </div>
    </div>
</div></>
  )
}

export default rooms