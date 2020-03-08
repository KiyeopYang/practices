import React from 'react';
import classes from './style.module.css';
import ListItem from './components/ListItem';

export default ({ items }) => {
	return (
		<div className={classes.list}>
			{items.map((o, i) => (
				<ListItem key={i} text={o} />
			))}
		</div>
	);
};
