import React, { useState } from 'react';
import Layout from 'components/Layout';
import Link from 'next/link';
import List from 'components/List';
import PostWriter from 'containers/PostWriter';

export default () => {
	const [items, setItems] = useState([]);
	return (
		<Layout>
			<h4>페이지 2</h4>
			<Link href="/">
				<a>페이지 1</a>
			</Link>
			<PostWriter onAdd={item => setItems([...items, item])} />
			<List items={items} />
		</Layout>
	);
};
