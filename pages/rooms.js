import React, { useEffect } from 'react'
import Header from './components/Header'
import Pageheader from './components/Pageheader'

const rooms = ({closenav}) => {
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
            <div className="room">
                <div className="roomimage">
                    <img src="./images/room4.jpg" alt="roomimage" />
                </div>
                <div className="info">
                    <p className="roomname">Lorem, ipsum.</p>
                <p className="roomdetails">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Consectetur, temporibus. Tempore, ullam
                    nesciunt.
                </p>
                </div>
                <button className="click"><i class="fa-solid fa-book"></i></button>
            </div>
            <div className="room">
                <div className="roomimage">
                    <img src="./images/room4.jpg" alt="roomimage" />
                </div>
                <div className="info">
                    <p className="roomname">Lorem, ipsum.</p>
                <p className="roomdetails">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Consectetur, temporibus. Tempore, ullam
                    nesciunt.
                </p>
                </div>
                <button className="click"><i class="fa-solid fa-book"></i></button>
            </div>
            <div className="room">
                <div className="roomimage">
                    <img src="./images/room4.jpg" alt="roomimage" />
                </div>
                <div className="info">
                    <p className="roomname">Lorem, ipsum.</p>
                <p className="roomdetails">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Consectetur, temporibus. Tempore, ullam
                    nesciunt.
                </p>
                </div>
                <button className="click"><i class="fa-solid fa-book"></i></button>
            </div>
            <div className="room">
                <div className="roomimage">
                    <img src="./images/room4.jpg" alt="roomimage" />
                </div>
                <div className="info">
                    <p className="roomname">Lorem, ipsum.</p>
                <p className="roomdetails">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Consectetur, temporibus. Tempore, ullam
                    nesciunt.
                </p>
                </div>
                <button className="click"><i class="fa-solid fa-book"></i></button>
            </div>
            <div className="room">
                <div className="roomimage">
                    <img src="./images/room4.jpg" alt="roomimage" />
                </div>
                <div className="info">
                    <p className="roomname">Lorem, ipsum.</p>
                <p className="roomdetails">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Consectetur, temporibus. Tempore, ullam
                    nesciunt.
                </p>
                </div>
                <button className="click"><i class="fa-solid fa-book"></i></button>
            </div>
            <div className="room">
                <picture className="roomimage">
                    <img src="./images/room4.jpg" alt="" />
                </picture>
                <div className="info">
                    <p className="roomname">Lorem, ipsum.</p>
                <p className="roomdetails">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Consectetur, temporibus. Tempore, ullam
                    nesciunt.
                </p>
                </div>
                <button className="click"><i class="fa-solid fa-book"></i></button>
            </div>
            <div className="room">
                <div className="roomimage">
                    <img src="./images/room4.jpg" alt="roomimage" />
                </div>
                <div className="info">
                    <p className="roomname">Lorem, ipsum.</p>
                <p className="roomdetails">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Consectetur, temporibus. Tempore, ullam
                    nesciunt.
                </p>
                </div>
                <button className="click"><i class="fa-solid fa-book"></i></button>
            </div>
            <div className="room">
                <div className="roomimage">
                    <img src="./images/room4.jpg" alt="roomimage" />
                </div>
                <div className="info">
                    <p className="roomname">Lorem, ipsum.</p>
                <p className="roomdetails">
                    Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Consectetur, temporibus. Tempore, ullam
                    nesciunt.
                </p>
                </div>
                <button className="click"><i class="fa-solid fa-book"></i></button>
            </div>
        </div>
    </div>
</div></>
  )
}

export default rooms