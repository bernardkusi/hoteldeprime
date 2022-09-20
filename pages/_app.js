import { useState } from 'react';
import Home from '.';
import '../styles/globals.css';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }) {
	const [navopen,setnavopen]=useState(false)
	const togglenav=()=>{
		setnavopen(!navopen)
		// console.log(navopen)
	}

	const closenav=()=>{
		setnavopen(false)
	}
	return <Layout togglenav={togglenav} navopen={navopen}>
		 <Component {...pageProps} closenav={closenav} />
		 </Layout>;
}

export default MyApp;
