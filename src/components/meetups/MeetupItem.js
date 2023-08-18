import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites_content';

function MeetupItem(props) {
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img
						className={classes.image}
						src={props.image}
						alt={props.title}
					/>
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavoriteStatusHandler}>
						{itemIsFavorite
							? 'Remove from Favorites'
							: 'To Favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
}

export default MeetupItem;
