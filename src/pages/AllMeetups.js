import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		async function fetchData() {
			const endpoint =
				'https://react-meetup-app-d5dbc-default-rtdb.europe-west1.firebasedatabase.app/meetups.json';
			const response = await fetch(endpoint);
			const data = await response.json();
			setIsLoading(false);
			setLoadedMeetups(data);
		}
		const result = fetchData();
		console.log(result);
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups Page</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
}

export default AllMeetupsPage;
