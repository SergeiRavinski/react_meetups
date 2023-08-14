import { Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
	return (
		<div>
			<Route path="/">
        <AllMeetupsPage />
      </Route>
      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage />
      </Route>
		</div>
	);
}

export default App;