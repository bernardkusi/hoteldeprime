import { useState } from 'react';
import Home from '.';
import '../styles/globals.css';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {
	const [navopen,setnavopen]=useState(false)
	const [bookingform,setbookingform]=useState(false)
	const [contactform,setcontactform]=useState(false)
	const [rooms,setrooms]=useState([
		{roomname:"Guest Room1",roomimage:'room1.jpg',roomid:1,roomdetails:"Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt."},
		{roomname:"Guest Room2",roomimage:'room2.jpg',roomid:2,roomdetails:"Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt."},
		{roomname:"Guest Room3",roomimage:'room3.jpg',roomid:3,roomdetails:"Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt."},
		{roomname:"Guest Room4",roomimage:'room4.jpg',roomid:4,roomdetails:"Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt."},
		{roomname:"Guest Room5",roomimage:'room5.jpg',roomid:5,roomdetails:"Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt."},
		{roomname:"Guest Room6",roomimage:'room6.jpg',roomid:6,roomdetails:"Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt."},
		{roomname:"Guest Room7",roomimage:'room7.jpg',roomid:7,roomdetails:"Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt."},
		{roomname:"Guest Room8",roomimage:'room8.jpg',roomid:8,roomdetails:"Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt."},
	])
	const togglenav=()=>{
		setnavopen(!navopen)
		// console.log(navopen)
	}

	const setbookingformstate=(value)=>{
		setbookingform(value)
		// console.log("booking")
	}

	const setcontactformstate=(value)=>{
		setcontactform(value)
	}

	const closemodals=(e)=>{
		if(e.target !== e.currentTarget){
			return
		}
		setbookingform(false)
		setcontactform(false)
		// console.log("closing")

	}

	const closenav=()=>{
		setnavopen(false)
	}
	return <Layout togglenav={togglenav} navopen={navopen} bookingform={bookingform} contactform={contactform}  setbookingform={setbookingformstate}  setcontactform={setcontactformstate} closemodals={closemodals}>
		 <Component {...pageProps} closenav={closenav} rooms={rooms}  setbookingform={setbookingformstate}/>
		 </Layout>;
}

export default MyApp;
