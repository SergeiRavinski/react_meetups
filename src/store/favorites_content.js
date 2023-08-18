import { createContext, useState } from 'react';

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: (favoriteMeetup) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {},
});

function favoritesContextProvider(props) {
	const [userFavorites, setUserFavorites] = useState();

	function addFavoriteHandler(favoriteMeetup) {
		setUserFavorites((previousUserFavorites) => {
			return previousUserFavorites.concat(favoriteMeetup);
		});
	}

	function removeFavoriteHandler(meetupId) {
		setUserFavorites((previousUserFavorites) => {
			return previousUserFavorites.filter(
				(meetup) => meetup.id !== meetupId
			);
		});
	}

	function itemIsFavoriteHandler(meetupId) {
		setUserFavorites(() => {
			return userFavorites.some((meetup) => meetup.id === meetupId);
		});
	}

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
