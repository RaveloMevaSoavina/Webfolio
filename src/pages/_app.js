import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics';
import '../assets/css/slick.min.css';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
	useEffect(() => {
		initGA();
		logPageView();
		Router.events.on('routeChangeComplete', logPageView);
	}, []);

	return <Component {...pageProps} />;
}
