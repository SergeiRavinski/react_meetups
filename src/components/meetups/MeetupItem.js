import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
	return (
		<li>
			<div>
				<img className={classes.image} src={props.image} alt={props.title} />
			</div>
			<div>
				<h3>{props.title}</h3>
				<address>{props.address}</address>
				<p>{props.description}</p>
			</div>
			<div>To favorites</div>
		</li>
	);
}

export default MeetupItem;
