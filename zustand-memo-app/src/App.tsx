import './App.css';
import Card from './componets/Card';
import InputForm from './componets/InputForm';
import MemoList from './componets/MemoList';

function App() {
  return (
    <div>
      <Card>
        <MemoList />
      </Card>
      <InputForm />
    </div>
  );
}

export default App;
