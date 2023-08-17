import { createContext, useState } from 'react';

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
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
	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{props.children}
		</FavoritesContext.Provider>
	);
}

export default favoritesContextProvider;