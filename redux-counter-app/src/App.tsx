import { store } from '@redux/config/store';
import { Provider } from 'react-redux';
import './App.css';
import Counter from './container/Counter';

function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
export default App;
