import React, { useEffect } from 'react';
import useApi from 'libs/useApi';
import Layout from './components/Layout';
import Body from './components/Body';

export default () => {
	const [api, requestApi] = useApi();

	useEffect(() => {
		requestApi({
			method: 'get',
			url: '/',
		});
	}, []);
	return (
		<Layout loading={api.status === 'loading'}>
			{api.data && <Body text={api.data.text} />}
		</Layout>
	);
};
