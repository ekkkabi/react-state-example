import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
    isDark: string;
}

const initialState: ThemeState = {
    isDark: localStorage.getItem('theme') || 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.isDark = action.payload;
            localStorage.setItem('theme', action.payload);
        },
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
