import Button from './components/Button';
import { GlobalStyle } from './components/GlobalStyled';
import { RootState } from './redux/config/store';
import { useAppSelector } from './redux/hooks/hook';

function App() {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
    }
    
    const isDark = useAppSelector((state: RootState) => state.theme.isDark);

    return (
        <>
            <GlobalStyle $isDark={isDark} />
            <Button />
        </>
    );
}

export default App;
