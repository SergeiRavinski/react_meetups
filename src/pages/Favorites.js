import { useContext } from 'react';

import FavoritesContext from '../store/favorites_content';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
	const favoritesCtx = useContext(FavoritesContext);

	let content;

	if (favoritesCtx.totalFavorites === 0) {
		content = <p>You got no favorites yet</p>;
	} else {
		content = <MeetupList meetups={favoritesCtx.favorites} />;
	}
}

export default FavoritesPage;
