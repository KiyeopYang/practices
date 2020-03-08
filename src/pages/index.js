import React, { useEffect } from 'react';
import useApi from 'libs/useApi';
import Layout from 'components/Layout';
import Post from 'containers/Post';
import List from 'components/List';
import Link from 'next/link';

export default () => {
	const [api, requestApi] = useApi();

	useEffect(() => {
		requestApi({
			url: '/',
		});
	}, []);
	return (
		<Layout loading={api.status === 'loading'}>
			<h4>페이지 1</h4>
			<Link href="/write">
				<a>페이지 2</a>
			</Link>
			<div>
				<Post />
				<Post />
				<Post />
			</div>
			<List items={['Text 1', 'Text 2', 'Text 3']} />
		</Layout>
	);
};
