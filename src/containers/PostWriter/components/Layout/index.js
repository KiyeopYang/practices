import React from 'react';
import classes from './style.module.css';

export default ({ children, ...props }) => (
	<form className={classes.root} {...props}>
		{children}
	</form>
);
