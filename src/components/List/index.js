import React from 'react';
import classes from './style.module.css';
import ListItem from './components/ListItem';

export default () => {
	return (
		<div className={classes.list}>
			<ListItem />
			<ListItem />
			<ListItem />
		</div>
	);
};
