import { useReducer } from 'react';
import request from 'libs/request';

const initialState = { status: 'init', data: null, error: null };
function reducer(_, action) {
	switch (action.type) {
		case 'request':
			return { status: 'loading' };
		case 'success':
			return { status: 'success', data: action.data };
		case 'failure':
			return { status: 'failure', error: action.error };
		default:
			throw new Error();
	}
}

/*
	페이지가 이동된 다음에 requiest 응답이 일어나 dispatch가 일어날 경우 memory leak 경고가 표시된다.
	이를 방지하기 위해 페이지가 이동될 때 clean-up 시켜주어야 한다.
	다음과 같이 수정하자.
	1. requestApi로 props를 받지 말고 useApi(props)를 통해 받은다음 useEffect를 통해 바로 api 호출
	2. useEffect의 반환 값으로 페이지 이동시 clean-up
	3. useApi(props, options={isManual: true})와 같은 식으로 query가 아닌 mutation일 때 수동으로 호출할 수 있도록 처리.
*/

export default () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const requestApi = async (...props) => {
		dispatch({ type: 'request' });
		try {
			const result = await request(...props);
			dispatch({ type: 'success', data: result.data });
			return result.data;
		} catch (e) {
			dispatch({ type: 'failure', error: e });
			return null;
		}
	};

	return [state, requestApi];
};
