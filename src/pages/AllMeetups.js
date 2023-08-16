import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
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
			<MeetupList meetups={DUMMY_DATA} />
		</section>
	);
}

export default AllMeetupsPage;
