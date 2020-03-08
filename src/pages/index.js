import React, { useEffect, useLayoutEffect } from 'react';
import List from 'components/List';
import Hook from 'components/Hook';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default () => {
	const router = useRouter();

	useLayoutEffect(() => {
		console.log(router.query);
	}, [router.query]);
	return (
		<div>
			test
			<List />
			<Hook />
			<Link href="?test=1">link</Link>
		</div>
	);
};
