import React, {
	useState,
	useEffect,
	useCallback,
	useMemo,
	useRef,
	useImperativeHandle,
	useLayoutEffect,
} from 'react';
import Input from './components/Input';

export default () => {
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [c, setC] = useState(0);

	const memoV = useMemo(() => a + b + c, [a, b]);
	const memoC = useCallback(() => a + b, [a, b]);

	const inputEl = useRef(null);

	useEffect(() => {
		inputEl.current.focus();
	}, [inputEl]);

	return (
		<div>
			<h1>
				HOOK {memoV} {memoC()}
			</h1>
			<h1>
				{a} {b} {c}
			</h1>
			<button onClick={() => setA(a + 1)}>A + 1</button>
			<button onClick={() => setB(b + 1)}>B + 1</button>
			<button onClick={() => setC(c + 1)}>C + 1</button>
			<Input ref={inputEl} type="text" />
			<button onClick={() => inputEl.current.focus()}>FOCUS</button>
		</div>
	);
};
