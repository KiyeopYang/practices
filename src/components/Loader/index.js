import React from 'react';
import clsx from 'clsx';
import classes from './style.module.css';

export default ({ inline }) => (
	<div
		className={clsx(classes.root, {
			[classes.inline]: inline,
		})}
	>
		<h1 className={classes.text}>LOADING</h1>
	</div>
);
