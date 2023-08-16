import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
	function addMeetupHandler(meetupData) {
		fetch(
			'https://react-meetup-app-d5dbc-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
	}
	return (
		<section>
			<h1>New Meetup Page</h1>
			<NewMeetupForm onAddNewMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetupPage;
