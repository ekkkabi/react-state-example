import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{ $isDark: string }>`
    body {
        width: 100vw;
        height: 100vh;
        margin: 0 auto;
        background-color: ${({ $isDark }) => ($isDark === 'dark' ? '#111111' : '#ffffff')};
        color: ${({ $isDark }) => ($isDark === 'dark' ? '#ffffff' : '#000000')};

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
