import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
	return (
		<section>
			<h1>All Meetups Page</h1>
			<MeetupList meetups={DUMMY_DATA} />
		</section>
	);
}

export default AllMeetupsPage;
