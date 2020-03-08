import React from 'react';
import classes from './style.module.css';

export default ({ text }) => (
	<div className={classes.root}>
		<p className={classes.text}>{text}</p>
	</div>
);
