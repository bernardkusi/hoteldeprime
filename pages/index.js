import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Contact from './components/Contact';
import Homesection from './components/Homesection';
import Pageheader from './components/Pageheader';
import Rooms from './components/Rooms';
import Services from './components/Services';

export default function Home({closenav,setbookingform}) {
	useEffect(() => {
	  closenav();	
	}, [])
	
	return (
		<div className={styles.container}>
			<Pageheader title="Hotel"/>

		<Homesection setbookingform={setbookingform}/>
		<Services/>
		<Rooms/>
		<Contact/>
		</div>
	);
}
