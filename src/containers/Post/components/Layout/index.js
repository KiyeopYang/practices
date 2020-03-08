import React from 'react';
import Loader from 'components/Loader';
import classes from './style.module.css';

export default ({ children, loading }) => (
	<div className={classes.root}>
		{children}
		{loading && <Loader inline />}
	</div>
);
