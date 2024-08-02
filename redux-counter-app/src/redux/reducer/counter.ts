import { CounterState } from '@redux/config/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: CounterState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        plus: (state) => {
            state.value += 1;
        },
        minus: (state) => {
            state.value -= 1;
        },
        plusByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        minusByAmount: (state, action: PayloadAction<number>) => {
            state.value -= action.payload;
        },
    },
});
export const { plus, minus, plusByAmount, minusByAmount } = counterSlice.actions;
export const selectCount = (state: { counter: CounterState }) => state.counter.value;

export default counterSlice.reducer;
