import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites_content';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Oslo Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All Meetups</Link>
					</li>
					<li>
						<Link to='/new-meetup'>New Meetups</Link>
					</li>
					<li>
						<Link to='/favorites'>Favorites</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
