import { RootState } from '@redux/config/store';
import { useAppDispatch } from '@redux/hooks/hook';
import { minus, plus } from '@redux/reducer/counter';
import { useSelector } from 'react-redux';

const Counter = () => {
    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>redux-counter-app</h1>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(plus())}>➕</button>
            <button onClick={() => dispatch(minus())}>➖</button>
        </>
    );
};
export default Counter;
