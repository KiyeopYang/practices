import React from 'react';
import Loader from 'components/Loader';
import classes from './style.module.css';

export default ({ children, loading }) => (
	<div className={classes.root}>
		<div className={classes.title}>Title</div>
		{children}
		<div className={classes.footer}>Footer</div>
		{loading && <Loader />}
	</div>
);
