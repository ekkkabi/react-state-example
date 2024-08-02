import { RootState } from '@redux/config/store';
import { useAppDispatch, useAppSelector } from '@redux/hooks/hook';
import { minus, plus } from '@redux/reducer/counter';

const Counter = () => {
    const counter = useAppSelector((state: RootState) => state.counter.value);
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
