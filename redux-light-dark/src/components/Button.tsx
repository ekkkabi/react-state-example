import styled from 'styled-components';
import dark from '../assets/dark.svg';
import light from '../assets/light.svg';
import { RootState } from '../redux/config/store';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hook';
import { setTheme } from '../redux/reducer/theme';

const Button = () => {
    const isDark = useAppSelector((state: RootState) => state.theme.isDark);
    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        dispatch(setTheme(isDark === 'dark' ? 'light' : 'dark'));
    };

    return <ButtonContainer onClick={toggleTheme} $isDark={isDark === 'dark'} />;
};
export default Button;

const ButtonContainer = styled.button<{ $isDark: boolean }>`
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background-color: transparent;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: ${({ $isDark }) => `url(${$isDark ? dark : light})`};
    filter: ${({ $isDark }) => ($isDark ? 'brightness(0) invert(1)' : 'none')};
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;

    &:focus,
    &:active {
        outline: none;
        border: none;
    }

    &:hover {
        border: 0.5px solid ${({ $isDark }) => ($isDark ? '#ffffff' : '#000000')};
        box-shadow: 0px 0px 10px 3px
            ${({ $isDark }) => ($isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)')};
    }
`;
