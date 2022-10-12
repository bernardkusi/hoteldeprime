import { useState } from 'react';
import Home from '.';
import '../styles/globals.css';
import Layout from './components/Layout';
import Rooms from './components/Rooms';

function MyApp({ Component, pageProps }) {
	const [navopen, setnavopen] = useState(false);
	const [bookingform, setbookingform] = useState(false);
	const [contactform, setcontactform] = useState(false);
	const [selectedroom,setselectedroom]=useState(null);
	const [rooms, setrooms] = useState([
		{
			roomname: 'Guest Room1',
			roomimage: 'room1',
			roomid: 1,
			roomdetails:
				'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt.'
		},
		{
			roomname: 'Guest Room2',
			roomimage: 'room2',
			roomid: 2,
			roomdetails:
				'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt.'
		},
		{
			roomname: 'Guest Room3',
			roomimage: 'room3',
			roomid: 3,
			roomdetails:
				'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt.'
		},
		{
			roomname: 'Guest Room4',
			roomimage: 'room4',
			roomid: 4,
			roomdetails:
				'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt.'
		},
		{
			roomname: 'Guest Room5',
			roomimage: 'room5',
			roomid: 5,
			roomdetails:
				'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt.'
		},
		{
			roomname: 'Guest Room6',
			roomimage: 'room6',
			roomid: 6,
			roomdetails:
				'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt.'
		},
		{
			roomname: 'Guest Room7',
			roomimage: 'room7',
			roomid: 7,
			roomdetails:
				'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt.'
		},
		{
			roomname: 'Guest Room8',
			roomimage: 'room8',
			roomid: 8,
			roomdetails:
				'Lorem ipsum dolor sit amet consectetur, adipisicingelit. Consectetur, temporibus. Tempore, ullamnesciunt.'
		}
	]);
	const togglenav = () => {
		setnavopen(!navopen);
		// console.log(navopen)
	};

	const setbookingformstate = (value) => {
		setbookingform(value);
		// console.log("booking")
	};

	const setcontactformstate = (value) => {
		setcontactform(value);
	};

	const closemodals = (e) => {
		if (e.target !== e.currentTarget) {
			return;
		}
		setbookingform(false);
		setcontactform(false);
	};

	const selectroom = (room) => {
		setselectedroom(room);
		setbookingform(true)
	};

	const closenav = () => {
		setnavopen(false);
	};
	return (
		<Layout
			togglenav={togglenav}
			navopen={navopen}
			bookingform={bookingform}
			contactform={contactform}
			setbookingform={setbookingformstate}
			setcontactform={setcontactformstate}
			closemodals={closemodals}
			selectedroom={selectedroom}
			rooms={rooms}
		>
			<Component
				{...pageProps}
				closenav={closenav}
				rooms={rooms}
				selectroom={selectroom}
				setbookingform={setbookingformstate}
			/>
		</Layout>
	);
}

export default MyApp;
