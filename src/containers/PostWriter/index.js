import React, { useState, useEffect, useRef } from 'react';
import useApi from 'libs/useApi';
import Layout from './components/Layout';

export default ({ onAdd }) => {
	const inputRef = useRef();
	const [text, setText] = useState('');
	const [api, requestApi] = useApi();

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const onClick = async () => {
		const result = await requestApi();
		onAdd(`${text} - ${result.text}`);
		setText('');
	};
	const isLoading = api.status === 'loading';
	return (
		<Layout onSubmit={e => e.preventDefault()}>
			<input
				ref={inputRef}
				value={text}
				onChange={e => setText(e.target.value)}
			/>
			<button type="submit" onClick={onClick} disabled={isLoading}>
				{isLoading ? '추가 중' : '추가하기'}
			</button>
		</Layout>
	);
};
