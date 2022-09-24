import { useState } from 'react';
import Home from '.';
import '../styles/globals.css';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {
	const [navopen,setnavopen]=useState(false)
	const [bookingform,setbookingform]=useState(false)
	const [contactform,setcontactform]=useState(false)
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
		 <Component {...pageProps} closenav={closenav}  setbookingform={setbookingformstate}/>
		 </Layout>;
}

export default MyApp;
